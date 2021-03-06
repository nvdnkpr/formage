//noinspection JSUnresolvedVariable
var mongoose = require('mongoose'),
    Types = mongoose.Schema.Types;

var schema = new mongoose.Schema({
    title: { type: String, required: true, label: 'כותרת'},
    email: { type: String, required: true, label: 'דוא"ל'},
    footer: {
        social: [
            {
                picture: { type: Types.Picture, label: 'תמונה'},
                url: { type: String, label: 'קישור'}
            }
        ],
        links: [
            {
                text: { type: String, label: 'טקסט'},
                url: { type: String, label: 'קישור'}
            }
        ]
    },
    mail_sent: {
        title: { type: String, require: true, label: 'כותרת'},
        text: { type: Types.Html, label: 'תוכן'}
    }
});

var model = module.exports = mongoose.model('config', schema);
model.label = 'הגדרות';
model.formage = {
    is_single: true,
    section: 'Configuration'
};
