db.voos.find({ $and: [{ "empresa.nome": "AZUL" }, { litrosCombustivel: { $lt: 400 } }] }).count();
