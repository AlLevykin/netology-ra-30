function Calendar({ date }) {

    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    const dateObj = {
        year: date.getFullYear(),
        month: months[date.getMonth()],
        day: date.getDate(),
        dayOfWeek: date.getDay(),
        firstdayOfWeek: new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
        lastdayOfWeek: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(),
        daysInCurrentMonth: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
        daysInPrevMonth: new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    };

    const TableRow = (week) => {

        let columns = [];

        for (let i = 1; i < 8; i++) {
            let day = i - (dateObj.firstdayOfWeek === 0 ? 6 : dateObj.firstdayOfWeek - 1) + week * 7;
            let className = '';

            if (day < 1) {
                day = dateObj.daysInPrevMonth + day;
                className = 'ui-datepicker-other-month';
            } else if (day > dateObj.daysInCurrentMonth) {
                day = day - dateObj.daysInCurrentMonth;
                className = 'ui-datepicker-other-month';
            } else if (day === dateObj.day) {
                className = 'ui-datepicker-today';
            }

            columns.push({
                key: `week${week}-day${i}`,
                className: className,
                day: day
            });
        }

        return columns.map((value) => {
            return (
                <td key={value.key} className={value.className}>{value.day}</td>
            )
        })
    }

    return (
        <div className="container">
            <div className="ui-datepicker">
                <div className="ui-datepicker-material-header">
                    <div className="ui-datepicker-material-day">{days[dateObj.dayOfWeek]}</div>
                    <div className="ui-datepicker-material-date">
                        <div className="ui-datepicker-material-day-num">{dateObj.day}</div>
                        <div className="ui-datepicker-material-month">{dateObj.month}</div>
                        <div className="ui-datepicker-material-year">{dateObj.year}</div>
                    </div>
                </div>
                <div className="ui-datepicker-header">
                    <div className="ui-datepicker-title">
                        <span className="ui-datepicker-month">{dateObj.month}</span>&nbsp;<span className="ui-datepicker-year">{dateObj.year}</span>
                    </div>
                </div>
                <table className="ui-datepicker-calendar">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="ui-datepicker-week-end" />
                        <col className="ui-datepicker-week-end" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" title="Понедельник">Пн</th>
                            <th scope="col" title="Вторник">Вт</th>
                            <th scope="col" title="Среда">Ср</th>
                            <th scope="col" title="Четверг">Чт</th>
                            <th scope="col" title="Пятница">Пт</th>
                            <th scope="col" title="Суббота">Сб</th>
                            <th scope="col" title="Воскресенье">Вс</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {TableRow(0)}
                        </tr>
                        <tr>
                            {TableRow(1)}
                        </tr>
                        <tr>
                            {TableRow(2)}
                        </tr>
                        <tr>
                            {TableRow(3)}
                        </tr>
                        <tr>
                            {TableRow(4)}
                        </tr>
                        <tr>
                            {TableRow(5)}
                        </tr>                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Calendar;