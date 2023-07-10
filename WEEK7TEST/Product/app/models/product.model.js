module.exports = mongoose => {

    var schema = mongoose.Schema(
  
   
  
      {
  
        name: String,
  
        description: String,
  
        price: Number,
  
        category: String,

        published:Boolean
  
      },
  
       
  
    );
  
   
  
   
  
    schema.method("toJSON", function() {
  
      const { __v, _id, ...object } = this.toObject();
  
      object.id = _id;
  
      return object;
  
    });
  
   
  
    const  Products = mongoose.model("products", schema);
  
    return Products;
  
  };