const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios').default;

let LIFX_BULB_ID = core.getInput('LIFX_BULB_ID')
let LIFX_TOKEN = core.getInput('LIFX_TOKEN')
let COLOUR = core.getInput('COLOUR')

let END_POINT = core.getInput('END_POINT)



async function run()
{
        try {
            core.notice("calling our action");


            const baseURL =“https://api.lifx.com/v1/lights/”+LIFX_BULB_ID;
            let response = await axios({
              baseURL: endpoint,
              url: ‘/state’,
              method: ‘post’,
              headers: {
                ‘Bearer’: LIFX_TOKEN ,
                ‘Content-type’: ‘application/json’,
                ‘X-ClientTraceId’: uuidv4().toString()
              },
              data: [{
                ‘power’:‘on’,
                ‘brightness’: ‘1.0’,
                 ‘color’: COLOUR,
                 ‘fast’: true
              }],
              responseType: ‘json’
            });




        } catch (error) {
            core.setFailed(error.message);
        }
    
};

// Initiate Light - set it blue

//        run: 'curl -X PUT "https://api.lifx.com/v1/lights/${{ secrets.LIFX_BULB_ID }}/state"  -H "Authorization: Bearer ${{ secrets.LIFX_TOKEN }}" -d "power=on&brightness=1.0&color=blue&fast=true"'


// if END_POINT = effects/pulse

//        run: 'curl -X POST "https://api.lifx.com/v1/lights/${{ secrets.LIFX_BULB_ID }}/effects/pulse" -H "Authorization: Bearer ${{ secrets.LIFX_TOKEN }}" -d "color=yellow&from_color=blue&period=2&cycles=10"'
//        run: sleep 14s
        

// if END_POINT = state
        
//        run: 'curl -X PUT "https://api.lifx.com/v1/lights/${{ secrets.LIFX_BULB_ID }}/state"  -H "Authorization: Bearer ${{ secrets.LIFX_TOKEN }}" -d "color=orange&fast=true"'

       

//        run: sleep 7s


        
//        run: 'curl -X PUT "https://api.lifx.com/v1/lights/${{ secrets.LIFX_BULB_ID }}/state"  -H "Authorization: Bearer ${{ secrets.LIFX_TOKEN }}" -d "power=off"'





