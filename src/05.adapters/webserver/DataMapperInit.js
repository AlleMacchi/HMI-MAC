import { readBits, decodedString } from '../../99.utils/global/dataUtils.js';

const WebServerDataMapper = {
    mapDataToObject: function(data) { 
        const decodedArray2 = decodedString(data.Array_2);
        const bitArr2 = readBits(decodedArray2);
        const decodedArray17 = decodedString(data.Array_17);
        const bitArr17 = readBits(decodedArray17);
        return {
            StatusMode: bitArr2[0],
            Bypass: bitArr17[0],
            SelPhysicalLogical: decodedString(data.SelPhysicalLogical),
            BabyNo: data.AGV_No,
            PositionToReach_mm: data.PositionToReach_mm,
            PositionToReach_logical: data.PositionToReach_logical,
            BatteryMinStartCharging: data.BatteryMinStartCharging,
            BatteryMaxStopCharging: data.BatteryMaxStopCharging,
            ColumnOfMotherShuttle: decodedString(data.ColumnOfMotherShuttle),
        };
    }
};

export { WebServerDataMapper as DataMapperInit};