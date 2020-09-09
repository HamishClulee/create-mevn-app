"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
// ----------------------------------------------------------------------------
// TypeScript Defs ------------------------------------------------------------
// ----------------------------------------------------------------------------
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
})(Role || (Role = {}));
// ----------------------------------------------------------------------------
// Mongoose Defs --------------------------------------------------------------
// ----------------------------------------------------------------------------
const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    emailVerifyToken: String,
    allowEmails: {
        type: Boolean,
        default: true
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: [Role.Admin, Role.User],
        default: Role.User
    }
}, { timestamps: true });
userSchema.pre('save', function save(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, undefined, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});
const comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};
userSchema.methods.comparePassword = comparePassword;
exports.User = mongoose.model('User', userSchema);
//# sourceMappingURL=User.js.map