import moment from 'moment'
moment.locale('es')

const translatedDays = {
    Sun: 'D',
    Mon: 'L',
    Tue: 'M',
    Wed: 'M',
    Thu: 'J',
    Fri: 'V',
    Sat: 'S'
}

export const getDaysOfWeek = () => {
// Obtén la fecha actual
    const currentDate = moment();

    // Crear un array para almacenar los objetos
    const daysOfWeek = [];

    // Obtén el día actual de la semana (0 para domingo, 1 para lunes, ..., 6 para sábado)
    const currentDayOfWeek = currentDate.day();

    // Crea un ciclo para los próximos 7 días en orden descendente
    for (let i = 0; i < 7; i++) {
    // Calcula la fecha restando el índice actual del ciclo al día actual
        const date = currentDate.clone().subtract(currentDayOfWeek - i, 'days');
        const today = i === currentDayOfWeek
        // Obtiene la letra inicial del día (por ejemplo, 'L' para lunes)
        const dayInitial = translatedDays[date.format('ddd') as 'Mon']
        // Obtiene el número del día (por ejemplo, 18 para el lunes 18 de X mes)
        const dayNumber = date.date();

        // Agrega un objeto con 'day' y 'number' al array
        daysOfWeek.push({ day: dayInitial, number: dayNumber, today });
    }

    return daysOfWeek
}
