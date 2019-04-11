 
 export interface Peci{
  Res_No: string;

  Location: string;

  Custom_Selection: string;
   
  Bridge: string;
    
  Primary: string;
   
  Secondary?: string;
 
  Language: string;

  Bridge2: string;
  
  Req_Field?: string;
  
  Clearance: Boolean;
 
  Comm: Boolean;
  
  With: string;
  
  Purpose: string;
  
  ECD: string;
  
  Number_of_Lines: string;
   
  Time_Zone: string;
    
  Start: string;
    
  End_Time: string;
    
  Bells_Start: string;
    
  Turned_Away: string;
  
  Questions: string;
  
  Left_Queue: string;
  
  US_800_Dialout: string;
  
  CDN_Dialout: string;
 
  NA_Dialout:  string;
  
  International_1: string;
  
  Level_Serv: string;
  
  Monitor: Boolean;
  
  Unused: string;
    
  Q_A: Boolean;
  
  Notif: string;
  
  No_Show: Boolean;
  
  Fax_email: string;
   
  PostV: Boolean;
 
  CD: Boolean;
  
  WAV_MP3: Boolean;
  
  Tape: Boolean;
  
  Transc: Boolean;
  
  Mail_Type: Boolean;
 
  Other_Media: Boolean;
 
  Roll_Call: Boolean;
  
  Announce: Boolean;
  
  Event_Call_D: Boolean;
 
  Pin_Entry: Boolean;
  
  C_Line: Boolean;
  
  Comment: string;
  
  Op_Comments: string;
  
  Chair_Changes: string;
  
  Incidents: string;
 
  Improve: string;
  
}