module.exports = mongoose => {

    var schema = mongoose.Schema(
  
   
  
      {
        name: String,
        desc: String,
        img:
        {
            data: Buffer,
            contentType: String
        }
  
      },
  
       
  
    );
  
   
  
   
  
    schema.method("toJSON", function() {
  
      const { __v, _id, ...object } = this.toObject();
  
      object.id = _id;
  
      return object;
  
    });
  
   
  
    const  Images = mongoose.model("images", schema);
  
    return Images;
  
  };