const mongoose = require('mongoose');

const dbConnection = async () => {
  await mongoose
    .connect(process.env.BD_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true,
      tlsCAFile: 'db/ca-certificate.crt',
    })
    .catch((error) => {
      return console.log(error);
    });

  console.log('Conectado a base de datos');
};

module.exports = { dbConnection }; /*useCreateIndex: true,

/* 
const fs = require('fs');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      */
/*
    });

    console.log('Base de datos online');
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de inicializar la DB');
  }
}; */
