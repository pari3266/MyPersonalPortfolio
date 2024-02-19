import { Pipe, PipeTransform } from "@angular/core";
import moment from "jalali-moment";
// import dayjs from 'dayjs';
// import 'dayjs/locale/es'
// import jalaliday from 'jalaliday';
// dayjs.extend(jalaliday)
@Pipe({
    name: 'dateDayjs',
    standalone: true
})

export class DateDayjsPipe implements PipeTransform {
    constructor(

    ) { }
    transform(value: any, ...args: any[]) {
        // if use dayjs , jalaliday
        // const currentDate = dayjs().locale('es')
        // const formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');
        // return formattedDate; // Output 2023-08-23 17:02:33
        // const month = dayjs().month()+1
        // const year = dayjs().year();

        // const FirstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
        // let CurrentMonthCount = 0 - FirstDayOfTheMonth;
        // const DaysMatrix = new Array(5).fill([]).map(() => {
        //     return new Array(7).fill(null).map(() => {
        //         CurrentMonthCount++
        //         return dayjs(new Date(year,month,CurrentMonthCount)).calendar('jalali').locale('fa').format('DD MMMM YYYY')
        //     })
        // });
        // return DaysMatrix
        let MomentDate = moment(value, 'YYYY/MM/DD');
        return MomentDate.locale('fa').format('YYYY/M/D');
    }
}