Blockly.Blocks['QTRSensors_Setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("QTRSensor_1",null,["Plugin.QTRSensorESP"],["Plugin.QTRSensorESP"]), "instance")
        .appendField("Setup");
    this.appendDummyInput()
        .appendField("NumSensor")
        .appendField(new Blockly.FieldDropdown([["2","2"],["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"],["8","8"]]), "numPin");
    this.appendValueInput("_S1")
      .appendField("Sensor 1:");
    this.appendValueInput("_S2")
      .appendField("Sensor 2:");
    this.appendValueInput("_S3")
      .appendField("Sensor 3:");
    this.appendValueInput("_S4")
      .appendField("Sensor 4:");
    this.appendValueInput("_S5")
      .appendField("Sensor 5:");
    this.appendValueInput("_S6")
      .appendField("Sensor 6:");
    this.appendValueInput("_S7")
      .appendField("Sensor 7:");
    this.appendValueInput("_S8")
      .appendField("Sensor 8:");
    //this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2aa3b8");
 this.setTooltip("");
 this.setHelpUrl("https://www.facebook.com/PrinceBot-326418591174060");
  }
};

Blockly.Blocks['QTRSensors_calibrate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("QTRSensor_1",null,["Plugin.QTRSensorESP"],["Plugin.QTRSensorESP"]), "instance")
        .appendField("Calibrate Sensor");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2aa3b8");
 this.setTooltip("");
 this.setHelpUrl("https://www.facebook.com/PrinceBot-326418591174060");
  }
};

Blockly.Blocks['QTRSensors_ReadMinimum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("QTRSensor_1",null,["Plugin.QTRSensorESP"],["Plugin.QTRSensorESP"]), "instance")
        .appendField("Read Minimum:")
        .appendField(new Blockly.FieldDropdown([["1","0"],["2","1"], ["3","2"], ["4","3"], ["5","4"], ["6","5"],["7","6"],["8","7"]]), "numPin");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#2aa3b8");
 this.setTooltip("");
 this.setHelpUrl("https://www.facebook.com/PrinceBot-326418591174060");
  }
};
Blockly.Blocks['QTRSensors_ReadMaximum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("QTRSensor_1",null,["Plugin.QTRSensorESP"],["Plugin.QTRSensorESP"]), "instance")
        .appendField("Read Maximum:")
        .appendField(new Blockly.FieldDropdown([["1","0"],["2","1"], ["3","2"], ["4","3"], ["5","4"], ["6","5"],["7","6"],["8","7"]]), "numPin");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#2aa3b8");
 this.setTooltip("");
 this.setHelpUrl("https://www.facebook.com/PrinceBot-326418591174060");
  }
};
Blockly.Blocks['QTRSensors_ReadPosition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("QTRSensor_1",null,["Plugin.QTRSensorESP"],["Plugin.QTRSensorESP"]), "instance");
    this.appendDummyInput()
        .appendField("Read position from")
        .appendField(new Blockly.FieldDropdown([["Black Line","0"],["White","1"]]), "colorLine");
    //this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#2aa3b8");
 this.setTooltip("");
 this.setHelpUrl("https://www.facebook.com/PrinceBot-326418591174060");
  }
};
Blockly.Blocks['QTRSensors_Set_minimum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("QTRSensor_1",null,["Plugin.QTRSensorESP"],["Plugin.QTRSensorESP"]), "instance")
        .appendField("Set Minimum");
    this.appendValueInput("_S1")
      .appendField("Sensor 1:");
    this.appendValueInput("_S2")
      .appendField("Sensor 2:");
    this.appendValueInput("_S3")
      .appendField("Sensor 3:");
    this.appendValueInput("_S4")
      .appendField("Sensor 4:");
    this.appendValueInput("_S5")
      .appendField("Sensor 5:");
    this.appendValueInput("_S6")
      .appendField("Sensor 6:");
    this.appendValueInput("_S7")
      .appendField("Sensor 7:");
    this.appendValueInput("_S8")
      .appendField("Sensor 8:");
    //this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2aa3b8");
 this.setTooltip("");
 this.setHelpUrl("https://www.facebook.com/PrinceBot-326418591174060");
  }
};
Blockly.Blocks['QTRSensors_Set_maximum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("QTRSensor_1",null,["Plugin.QTRSensorESP"],["Plugin.QTRSensorESP"]), "instance")
        .appendField("Set Maximum");
    this.appendValueInput("_S1")
      .appendField("Sensor 1:");
    this.appendValueInput("_S2")
      .appendField("Sensor 2:");
    this.appendValueInput("_S3")
      .appendField("Sensor 3:");
    this.appendValueInput("_S4")
      .appendField("Sensor 4:");
    this.appendValueInput("_S5")
      .appendField("Sensor 5:");
    this.appendValueInput("_S6")
      .appendField("Sensor 6:");
    this.appendValueInput("_S7")
      .appendField("Sensor 7:");
    this.appendValueInput("_S8")
      .appendField("Sensor 8:");
    //this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#2aa3b8");
 this.setTooltip("");
 this.setHelpUrl("https://www.facebook.com/PrinceBot-326418591174060");
  }
};
Blockly.Blocks['QTRSensors_ReadPosition_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("QTRSensor_1",null,["Plugin.QTRSensorESP"],["Plugin.QTRSensorESP"]), "instance")
        .appendField("Set pin and values");
    this.appendDummyInput()
        .appendField("Read position from")
        .appendField(new Blockly.FieldDropdown([["Black Line","0"],["White","1"]]), "colorLine");
    this.appendDummyInput()
        .appendField("NumSensor")
        .appendField(new Blockly.FieldDropdown([["2","2"],["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"],["8","8"]]), "numPin");
    this.appendValueInput("_S1")
      .appendField("Sensor 1:");
    this.appendValueInput("_S2")
      .appendField("Sensor 2:");
    this.appendValueInput("_S3")
      .appendField("Sensor 3:");
    this.appendValueInput("_S4")
      .appendField("Sensor 4:");
    this.appendValueInput("_S5")
      .appendField("Sensor 5:");
    this.appendValueInput("_S6")
      .appendField("Sensor 6:");
    this.appendValueInput("_S7")
      .appendField("Sensor 7:");
    this.appendValueInput("_S8")
      .appendField("Sensor 8:");
    //this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour("#2aa3b8");
 this.setTooltip("");
 this.setHelpUrl("https://www.facebook.com/PrinceBot-326418591174060");
  }
};
Blockly.Blocks["QTRSensors_Calculator_PID"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("QTRSensor_1",null,["Plugin.QTRSensorESP"],["Plugin.QTRSensorESP"]), "instance")
        .appendField('PD Controller')
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("QTR_output"), "nameOfVariable_OUTPUT");
    this.appendValueInput("QTR_input")
      .appendField("input:");
    this.appendValueInput("QTR_KP")
      .appendField("KP:");
    this.appendValueInput("QTR_KD")
      .appendField("KD:");
    this.appendStatementInput('HANDLER');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#2aa3b8");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};