const Mongoose = require("mongoose");
class Carteira extends Mongoose.Schema {
  constructor() {
    super({
      name: {
        type: String,
        required: true,
      },
      img: {
        required: false,
      },
    
      category: {
        type: String,
        enum: ['conservador', 'medio prazo', 'agressivo'],
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      rating: [
        {
         rate: {
             type:Number,
             required: true,
         },
         peaple: {
             type: Number,
             required: true,
         },

        },],
     
      ranking: [{
        position : {
            type: Number,
            required: true,
        },
        profitability: [{
            oneMounth:{
                type: Number,
                required: true,
            },
            oneyear: {
                type: Number,
                required: true,
            },
            twoYear: {
                type: Number,
                required: true,
            },
            ytd: {
                type: Number,
                required: true,
            },
        }],


      }],
     
      ativo: {
        type: Boolean,
        required: true,
      },
    });

    //Registrando Schema no Mongoose
    Mongoose.model("Carteira", this);
  }
}

module.exports = Carteira;
