const core = require('@actions/core');
const github = require('@actions/github');
// library to make REST api calls
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');


let LIFX_BULB_ID = core.getInput('LIFX_BULB_ID')
let LIFX_TOKEN = core.getInput('LIFX_TOKEN')
let COLOUR = core.getInput('COLOUR')

//let END_POINT = core.getInput('END_POINT)



async function run()
{
        try {
            
            if (COLOUR=='black')
            {
                
                core.notice("Turn off the light");
                                                       
                const options = {
                  method: 'PUT',
                  url: 'https://api.lifx.com/v1/lights/'+LIFX_BULB_ID+'/state',
                  headers: {
                    accept: 'text/plain',
                    'content-type': 'application/json',
                    Authorization: 'Bearer '+LIFX_TOKEN
                  },
                  data: {
                    power: 'off',
                  }
                };
                
                axios
                  .request(options)
                  .then(function (response) {
                    console.log(response.data);
                  })
                  .catch(function (error) {
                    console.error(error);
                  });


              } else {
            
                core.notice("Set the light colour");
            
            
                let STATUS = 'on';
                
                const options = {
                  method: 'PUT',
                  url: 'https://api.lifx.com/v1/lights/'+LIFX_BULB_ID+'/state',
                  headers: {
                    accept: 'text/plain',
                    'content-type': 'application/json',
                    Authorization: 'Bearer '+LIFX_TOKEN
                  },
                  data: {
                    power: STATUS,
                    color: COLOUR,
                    brightness: 1.0,
                    fast: true
                  }
                };
                
                axios
                  .request(options)
                  .then(function (response) {
                    console.log(response.data);
                  })
                  .catch(function (error) {
                    console.error(error);
                  });

              }
        

        } catch (error) {
            core.setFailed(error.message);
        }
    
};

run();



// Initiate Light - set it blue

//        run: 'curl -X PUT "https://api.lifx.com/v1/lights/${{ secrets.LIFX_BULB_ID }}/state"  -H "Authorization: Bearer ${{ secrets.LIFX_TOKEN }}" -d "power=on&brightness=1.0&color=blue&fast=true"'


// if END_POINT = effects/pulse

//        run: 'curl -X POST "https://api.lifx.com/v1/lights/${{ secrets.LIFX_BULB_ID }}/effects/pulse" -H "Authorization: Bearer ${{ secrets.LIFX_TOKEN }}" -d "color=yellow&from_color=blue&period=2&cycles=10"'
//        run: sleep 14s
        

// if END_POINT = state
        
//        run: 'curl -X PUT "https://api.lifx.com/v1/lights/${{ secrets.LIFX_BULB_ID }}/state"  -H "Authorization: Bearer ${{ secrets.LIFX_TOKEN }}" -d "color=orange&fast=true"'

       

//        run: sleep 7s


        
//        run: 'curl -X PUT "https://api.lifx.com/v1/lights/${{ secrets.LIFX_BULB_ID }}/state"  -H "Authorization: Bearer ${{ secrets.LIFX_TOKEN }}" -d "power=off"'





