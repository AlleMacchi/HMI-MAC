const message_Id= document.getElementById("message_id");
const message_TaskNumber= document.getElementById("message_taskNumber");
const message_Coordinate= document.getElementById("message_coordinate");
const message_Result= document.getElementById("message_result");
const message_ErrorCode= document.getElementById("message_errorCode");
const message_TaskStatus= document.getElementById("message_taskStatus");

export function updateWMS(data){

    if (!data) {
        console.log("No data to updateWMS");
        return;
    }

    message_Id.textContent = data.ShuttleToWMS_Message_Id;
    message_TaskNumber.textContent = data.ShuttleToWMS_Message_TaskNumber;
    message_Coordinate.textContent = data.ShuttleToWMS_Message_Coordinate;
    message_Result.textContent = data.ShuttleToWMS_Message_Result;
    message_ErrorCode.textContent = data.ShuttleToWMS_Message_ErrorCode;
    message_TaskStatus.textContent = data.ShuttleToWMS_Message_TaskStatus;

}