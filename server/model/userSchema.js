const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    work:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    cpassword:{
        type:String,
        require:true,
    },

    date:{
        type:Date,
        default:Date.now
    },
    tokens:[{
        token:{
            type:String,
            require:true,
        }
    }],
    messages:[{
        name:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true,
        },
        phone:{
            type:Number,
            require:true,
        },
        message:{
            type:String,
            require:true,
        },
    }]
});


// hashing password
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.cpassword = await bcrypt.hash(this.cpassword,12)
    }
    next();
});
// auth token
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = await jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(err){
    console.log(err);
    }
}

// storing messages
userSchema.methods.addMessage = async function(
    name,
    email,
    phone,
    message){

        try{
            this.messages.concat({name:name,email:email,phone:phone,message:message});
            await this.save();
            return this.message;
        }
        catch (err) {
            console.log(error)
        }

}

const User = mongoose.model('USER',userSchema);

module.exports = User;