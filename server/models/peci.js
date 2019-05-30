const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const peciSchema = new Schema({
    Res_No: {
        type: String,
        unique: true,
        required: true
      },    
    Location: {
        type: String,
        required: true
      },
    Custom_Selection: String,
    Bridge: {
        type: String,
        required: true
      },
    Primary: {
        type: String,
        required: true
      },
    Secondary: String,
    Language: {
        type: String,
        required: true
      },
    Bridge2: String,
    Req_Field: String,
    Clearance: String,
    Comm: String,
    With: String,
    Purpose: String,
    ECD: String,
    Number_of_Lines: {
        type: String,
        required: true
      },
    Time_Zone: {
        type: String,
        required: true
      },
    Start: {
        type: String,
        required: true
      },
    End_Time: {
        type: String,
        required: true
      },
    Bells_Start: String,
    Turned_Away: String,
    Questions: String,
    Left_Queue: String,
    US_800_Dialout: String,
    CDN_Dialout: String,
    NA_Dialout: String,
    International1: String,
    International2: String,
    International3: String,
    International4: String,
    International5: String,
    International6: String,
    International7: String,
    International8: String,
    Level_Serv: {
        type: String,
        required: true
      },
    Monitor: String,
    Unused: String,
    Q_A: String,
    Notif: String,
    No_Show: String,
    Fax_email: String,
    PostV: String,
    CD: String,
    WAV_MP3: String,
    Tape: String,
    Transc: String,
    Mail_Type: String,
    Other_Media: String,
    Roll_Call: String,
    Announce: String,
    Event_Call_D: String,
    Pin_Entry: String,
    C_Line: String,
    Comment: String,
    Op_Comments: String,
    Chair_Changes: String,
    Incidents: String,
    Improve: String    
});


module.exports = mongoose.model('peci', peciSchema)