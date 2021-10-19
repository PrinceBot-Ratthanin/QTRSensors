var number_pin_sensor = '2';
Blockly.JavaScript['QTRSensors_Setup'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var number_pin = block.getFieldValue('numPin'); 
    var value_S1 = Blockly.JavaScript.valueToCode(block, '_S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S2 = Blockly.JavaScript.valueToCode(block, '_S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S3 = Blockly.JavaScript.valueToCode(block, '_S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S4 = Blockly.JavaScript.valueToCode(block, '_S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S5 = Blockly.JavaScript.valueToCode(block, '_S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S6 = Blockly.JavaScript.valueToCode(block, '_S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S7 = Blockly.JavaScript.valueToCode(block, '_S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S8 = Blockly.JavaScript.valueToCode(block, '_S8', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    
    var code = `
  #EXTINC#include "QTRSensors.h"#END
  #EXTINC#include "Arduino.h"#END
  #VARIABLE QTRSensors ${variable_instance};#END
  #VARIABLE float previous_error = 0;#END
  #VARIABLE float output_eror = 0;#END
  ${variable_instance}.setTypeAnalog();
  ${variable_instance}.setSensorPins((const uint8_t[]){${value_S1}, ${value_S2}, ${value_S3}, ${value_S4}, ${value_S5}, ${value_S6},${value_S7},${value_S8}}, ${number_pin});
  `;
    return code;
  };
  Blockly.JavaScript['QTRSensors_calibrate'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.calibrate();`;
    return code;
  };
  Blockly.JavaScript['QTRSensors_ReadMinimum'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var number_numPin = block.getFieldValue('numPin'); 
    var code = `${variable_instance}.calibrationOn.minimum[${number_numPin}]`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['QTRSensors_ReadMaximum'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var number_numPin = block.getFieldValue('numPin'); 
    var code = `${variable_instance}.calibrationOn.maximum[${number_numPin}]`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['QTRSensors_ReadPosition'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var number_colorLine = block.getFieldValue('colorLine'); 
    var code = `${variable_instance}.readPosition(${number_colorLine})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['QTRSensors_Set_minimum'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var value_S1 = Blockly.JavaScript.valueToCode(block, '_S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S2 = Blockly.JavaScript.valueToCode(block, '_S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S3 = Blockly.JavaScript.valueToCode(block, '_S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S4 = Blockly.JavaScript.valueToCode(block, '_S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S5 = Blockly.JavaScript.valueToCode(block, '_S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S6 = Blockly.JavaScript.valueToCode(block, '_S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S7 = Blockly.JavaScript.valueToCode(block, '_S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S8 = Blockly.JavaScript.valueToCode(block, '_S8', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var code = `#EXTINC#include "QTRSensors.h"#END#VARIABLE QTRSensors ${variable_instance};#END
    ${variable_instance}.setSensorMin(${value_S1},${value_S2},${value_S3},${value_S4},${value_S5},${value_S6},${value_S7},${value_S8},${number_pin_sensor});
    `;
    return code;
  };
  Blockly.JavaScript['QTRSensors_Set_maximum'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var value_S1 = Blockly.JavaScript.valueToCode(block, '_S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S2 = Blockly.JavaScript.valueToCode(block, '_S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S3 = Blockly.JavaScript.valueToCode(block, '_S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S4 = Blockly.JavaScript.valueToCode(block, '_S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S5 = Blockly.JavaScript.valueToCode(block, '_S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S6 = Blockly.JavaScript.valueToCode(block, '_S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S7 = Blockly.JavaScript.valueToCode(block, '_S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S8 = Blockly.JavaScript.valueToCode(block, '_S8', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    
    var code = `#VARIABLE float previous_error = 0;#END
    #VARIABLE float output_eror = 0;#END
    ${variable_instance}.setSensorMax(${value_S1},${value_S2},${value_S3},${value_S4},${value_S5},${value_S6},${value_S7},${value_S8},${number_pin_sensor});
    `;
    return code;
  };
  Blockly.JavaScript['QTRSensors_ReadPosition_sensor'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var number_colorLine = block.getFieldValue('colorLine'); 
    number_pin_sensor = block.getFieldValue('numPin'); 
    var value_S1 = Blockly.JavaScript.valueToCode(block, '_S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S2 = Blockly.JavaScript.valueToCode(block, '_S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S3 = Blockly.JavaScript.valueToCode(block, '_S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S4 = Blockly.JavaScript.valueToCode(block, '_S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S5 = Blockly.JavaScript.valueToCode(block, '_S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S6 = Blockly.JavaScript.valueToCode(block, '_S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S7 = Blockly.JavaScript.valueToCode(block, '_S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_S8 = Blockly.JavaScript.valueToCode(block, '_S8', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    //var code = `${variable_instance}._min_sensor_values[0]`;
    var code = `#EXTINC#include "QTRSensors.h"#END#VARIABLE QTRSensors ${variable_instance};#END
    ${variable_instance}.readPosition_sensor(${number_colorLine},${number_pin_sensor},${value_S1},${value_S2},${value_S3},${value_S4},${value_S5},${value_S6},${value_S7},${value_S8})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['QTRSensors_Calculator_PID'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    //var variable_OUTPUT = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('nameOfVariable_OUTPUT'), Blockly.Variables.NAME_TYPE);
    var variable_OUTPUT = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('nameOfVariable_OUTPUT'), Blockly.Variables.NAME_TYPE);
    var value_input = Blockly.JavaScript.valueToCode(block, 'QTR_input', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_KP = Blockly.JavaScript.valueToCode(block, 'QTR_KP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var value_KD = Blockly.JavaScript.valueToCode(block, 'QTR_KD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var statements_code = Blockly.JavaScript.statementToCode(block, 'HANDLER');

    var code = `
    output_eror = ${value_input};
     ${variable_OUTPUT} = ${value_KP}*output_eror + ${value_KD}*(output_eror - previous_error);
     \n${statements_code}
    \nprevious_error = output_eror;
    `;

    return code;
  };