 $(function(){
    var iottalk_url = 'https://class.iottalk.tw';   // 'http://DomainName:port'; or 'https://DomainName';
    var mqtt_url = undefined; // 'ws://IP:port/mqtt'; or 'wss://DomainName:port/mqtts'; 
    var mqtt_user =  'iottalk';
    var mqtt_password = 'iottalk2023';
    var exec_interval = 500;

    var profile = {
	    'dm_name': 'Bulb',
		'odf_list':[Luminance, Color_O],
		'd_name': undefined,
    };

    var lum;

    function Luminance(data){
        lum = data[0];
    }

    function Color_O(data){
        var rr = Math.floor((data[0] * lum) / 100);
        var gg = Math.floor((data[1] * lum) / 100);
        var bb = Math.floor((data[2] * lum) / 100);
        $('.bulb-top, .bulb-middle-1, .bulb-middle-2, .bulb-middle-3, .bulb-bottom, .night').css(
            {'background': 'rgb('+ rr +', '+ gg +', '+ bb +')'}
        );
    }
      
/*******************************************************************/                
    function sa_init(){
	    console.log(profile.d_name);
		$('.Device_name')[0].innerText = profile.d_name;
	}
    var sa = {
        'sa_init': sa_init,
        'iottalk_url': iottalk_url,
        'mqtt_url': mqtt_url,
        'mqtt_user': mqtt_user,
        'mqtt_password': mqtt_password,
        'exec_interval': exec_interval,
    }; 
    dai(profile, sa);     
});
