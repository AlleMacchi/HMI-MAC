import { readBits, decodedString } from '../../99.utils/global/dataUtils.js';

const WebServerDataMapper = {
    mapDataToObject: function(data) { 
        return {
            SelPhysicalLogical: decodedString(data.SelPhysicalLogical),
            BabyNo: data.AGV_No,
            PositionToReach_mm: data.PositionToReach_mm,
            PositionToReach_logical: data.PositionToReach_logical,
            BatteryMinStartCharging: data.BatteryMinStartCharging,
            BatteryMaxStopCharging: data.BatteryMaxStopCharging,
        };
    }
};

export { WebServerDataMapper as DataMapperInit};