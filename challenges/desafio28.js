db.resumoVoos.insertOne(
  {
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: db.voos.find(
      {
        "empresa.nome": "LATAM AIRLINES BRASIL",
        natureza: "Doméstica",
      },
    ),
  },
);

db.resumoVoos.findOne(
  { empresa: "LATAM AIRLINES BRASIL" },
  {
    _id: false,
    empresa: true,
    totalVoosDomesticos: true,
  },
);
