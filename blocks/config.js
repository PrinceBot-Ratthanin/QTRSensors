module.exports = [
	{
		name : "QTRSensors",
		blocks : [
      {
        xml: `<sep gap="32"></sep><label text="คำสั่งสำหรับใช้งาน Analog ของบอร์ดหลัก" web-class="headline"></label>`
      },
      {
                    xml : 
                    `<block type="QTRSensors_Setup">
                        <value name="_S1"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S2"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S3"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S4"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S5"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S6"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S7"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S8"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    </block>`
      },
      'QTRSensors_calibrate',
      'QTRSensors_ReadMinimum',
      'QTRSensors_ReadMaximum',
      'QTRSensors_ReadPosition',
      
      {
        xml: `<sep gap="32"></sep><label text="คำสั่งสำหรับอ่านข้อมูลด้านนอก" web-class="headline"></label>`
      },
      {
                    xml : 
                    `<block type="QTRSensors_Set_minimum">
                        <value name="_S1"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S2"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S3"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S4"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S5"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S6"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S7"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S8"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    </block>`
      },
      {
                    xml : 
                    `<block type="QTRSensors_Set_maximum">
                        <value name="_S1"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S2"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S3"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S4"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S5"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S6"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S7"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S8"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    </block>`
      },
      {
                    xml : 
                    `<block type="QTRSensors_ReadPosition_sensor">
                        <value name="_S1"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S2"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S3"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S4"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S5"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S6"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S7"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                        <value name="_S8"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    </block>`
      },
      {
                    xml : 
                    `<block type="QTRSensors_Calculator_PID">
                        <value name="QTR_input"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
                        <value name="QTR_KP"><shadow type="math_number"><field name="NUM">1.1</field></shadow></value>
                        <value name="QTR_KD"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    </block>`
      },
			
		]
	}	
];