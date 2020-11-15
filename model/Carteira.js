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
             type:number,
             required: true,
         },
         peaple: {
             type: number,
             required: true,
         },

        },],
     
      ranking: [{
        position : {
            type: number,
            required: true,
        },
        profitability: [{
            oneMounth:{
                type: number,
                required: true,
            },
            oneyear: {
                type: number,
                required: true,
            },
            twoYear: {
                type: number,
                required: true,
            },
            ytd: {
                type: number,
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
