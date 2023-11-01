 $(function(){
    var iottalk_url = '';   // 'http://DomainName:port'; or 'https://DomainName';
    var mqtt_url = ''; // 'ws://IP:port/mqtt'; or 'wss://DomainName:port/mqtts'; 
    var mqtt_user =  '';
    var mqtt_password = '';
    var exec_interval = 500;

    var profile = {
	    'dm_name': 'Dummy_Device',          
		'idf_list':[Dummy_Sensor],
		'odf_list':[Dummy_Control],
		'd_name': undefined,
    };
		
    function Dummy_Sensor(){
        return Math.random();  // return undefined; // if no data to send
    }

    function Dummy_Control(data){
       $('.ODF_value')[0].innerText = data[0];
    }
      
/*******************************************************************/                
    function ida_init(){
	    console.log(profile.d_name);
		$('.Device_name')[0].innerText = profile.d_name;
	}
    var ida = {
        'ida_init': ida_init,
        'iottalk_url': iottalk_url,
        'mqtt_url': mqtt_url,
        'mqtt_user': mqtt_user,
        'mqtt_password': mqtt_password,
        'exec_interval': exec_interval,
    }; 
    dai(profile,ida);     
});
