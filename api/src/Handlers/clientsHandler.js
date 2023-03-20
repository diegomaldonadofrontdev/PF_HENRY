const jwt = require("jsonwebtoken");
const TOKEN_KEY = "17318cd9-78c9-49ab-b6bd-9f6ca4ebc818";

const {
	registerClient,
	searchClientById,
	updateClient,
	searchClientExist,
	validatePasswordClient,
	searchClient,
	confirmEmail,
	sendMailNewPassword,
	resetPasswordController,
} = require("../Controllers/clientsController");

// GETS HANDLERS
const getClientHandler = async (req, res) => {
	// FUNCIONANDO
	const { id } = req.params;
	try {
		const client = await searchClientById(id);
		res.status(200).json(client);
	} catch (error) {
		res.status(404).json({ Error: "Error al obtener a los clientes" });
	}
};

const confirmEmailHandler = async (req, res) => {
	// FUNCIONANDO
	const token = req.params.token;
	try {
		const confirm = await confirmEmail(token);
		res.status(200).json({ confirm });
	} catch (error) {
		res.status(400).json({ Error: "No existe ningun token" });
	}
};

// POSTS HANDLERS
const postClientHandler = async (req, res) => {
	// FUNCIONANDO
	const client = req.body;
	try {

		const token = jwt.sign({ email: client.email }, TOKEN_KEY, {
			expiresIn: "2h",
		});
		const clientBDD = await registerClient(client, token);
		if(!clientBDD) return res.status(400).json({error: "Ya existe el usuario, por favor inicia sesion!"})
		else return res.status(200).json([clientBDD, { token: token }]);

	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const login = async (req, res) => {
	// FUNCIONANDO
	const { email, password } = req.body;

	const findEmail = await searchClientExist(email);
	if (!findEmail) res.status(404).json("No existe el usuario");

	const validate = await validatePasswordClient(email, password);
	if (!validate) res.status(404).json("Contraseña incorrecta");

	const clientBDD = await searchClient(email);
	try {
		const token = jwt.sign({ username: clientBDD.email }, TOKEN_KEY, {
			expiresIn: "2h",
		});
		res.status(200).json([clientBDD, { token: token }]);
	} catch (error) {
		res.status(400).json("Error al iniciar la sesion");
	}
};

const registerWhitGoogle = async (req, res) => {
	// FUNCIONANDO
	// const { firstname, lastname, email, password,} = req.body;
	const client = req.body;

	try {
		const clientBDD = await registerClient(client);

		const token = jwt.sign(
			{ name: client.firstname, email: client.email },
			TOKEN_KEY,
			{ expiresIn: "2h" }
		);

		res.status(200).json([clientBDD, { token: token }]);
	} catch (error) {
		res.status(400).json("Ocurrio un error en el registro!");
	}
};

// PUTS HANDLERS
const updateClientHandler = async (req, res) => {
	// FUNCIONANDO
	const { clientId } = req.params;
	const body = req.body;

	try {
		const client = await updateClient(clientId, body);
		res.status(200).json();
	} catch (error) {
		res.status(404).json({ error: `Error al actualizar el cliente` });
	}
};

// DELETE HANDLERS

const sendMailResetPassword = async (req, res) => {
	const { email } = req.body;
	try {
		const token = jwt.sign({ email: email }, TOKEN_KEY, { expiresIn: "2h" });

		const sendMail = await sendMailNewPassword(email, token);
		res.status(200).json(sendMail);
	} catch (error) {
		res
			.status(404)
			.json({ Error: "No se ha enviado el link para resetear la contraseña" });
	}
};

const resetPassword = async (req, res) => {
	const { password } = req.body;
	const { token } = req.params;
	console.log(token);
	console.log(password);

	try {
		const reset = await resetPasswordController(password, token);
		res.status(200).json(reset);
	} catch (error) {
		res.status(404).json({ Error: "No se pudo cambiar la contraseña" });
	}
};

module.exports = {
	postClientHandler,
	getClientHandler,
	updateClientHandler,
	login,
	registerWhitGoogle,
	confirmEmailHandler,
	sendMailResetPassword,
	resetPassword,
};
