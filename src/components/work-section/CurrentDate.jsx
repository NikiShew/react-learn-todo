import './workSections.scss';


export default function CurrentDate() {
    let dates = new Date();

    const hours = dates.getHours();
    const minutes = dates.getMinutes();

    const day = dates.getDate();
    const month = dates.getMonth() + 1;
    const year = dates.getFullYear();



    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return (
            <div className="date">
                <h4>{`${formattedHours}:${formattedMinutes}`}</h4>
                <h4>{`${day}.${month}.${year}`}</h4>
            </div>
    )
}