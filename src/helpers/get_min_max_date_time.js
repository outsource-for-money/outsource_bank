import moment from "moment";

let getMinMaxDateTime = () => {
	let now = moment();
	let minDateTime;
	if(now.minute() > 30){
		minDateTime = now.add(1, 'h').minute(0);
	}else {
		minDateTime = now.minute(30);
	}
	return {
		minDate: minDateTime.toDate(),
		maxDate: moment().add(2,'d').hour(23).minute(59).toDate(),
		// minTime: 
	}
};

let getMinMaxTime = (date, time_begin, time_end) => {
	let now = moment(),
		nowString = now.format('YYYY-MM-DD'),
		dateString = moment(date).format('YYYY-MM-DD'),
		minTime,
		maxTime,
		startHour = time_begin.hour(),
		startMinute = time_begin.minute(),
		endHour = time_end.hour(),
		endMinute = time_end.minute();
		if(dateString === nowString){
			if(now.hour() < startHour ){
				minTime = moment().hour(startHour).minute(startMinute);
			}else{
				if(moment().minute() > 30){
					minTime = moment().add(1, 'h').minute(0);
				}else{
					minTime = moment().minute(30);
				}
			}
		}else{
			minTime = moment().hour(startHour).minute(startMinute);
		}
	maxTime = moment().hour(endHour).minute(endMinute);
	console.log('minTime', minTime.format('mm:ss'), minTime.toDate());
	return {
		minDate: minTime.toDate(),
		maxDate: maxTime.toDate(),
		defaultDate: minTime.toDate()
	}
}
let getMinMaxDate = () => {
	let now = moment(),
		minDate,
		maxDate,
		addIndex = 0;
	if(now.hour() > 15 || (now.hour() === 15 && now.minute() > 0)){
		addIndex += 1;
		minDate = moment().add(addIndex, 'd').hour(8).minute(0);
	}else{
		minDate = moment().minute(0);
	}
	maxDate = moment().add(addIndex + 2, 'd').hour(15).minute(0);
	return {
		minDate: minDate.toDate(),
		maxDate: maxDate.toDate()
	}
}
export {
	getMinMaxTime,
	getMinMaxDate
}
export default getMinMaxDateTime;