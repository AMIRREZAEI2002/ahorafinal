let flightsData = [
    { id: 1, origin: 'تهران', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 25, airline: 'ایران ایر', price: 2800000, flightNumber: 'IR-101', seatNumber: '12A', date: { year: 1403, month: 10, day: 12 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 2, origin: 'مشهد', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 15, airline: 'ماهان ایر', price: 3200000, flightNumber: 'MH-102', seatNumber: '15B', date: { year: 1403, month: 10, day: 13 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 3, origin: 'اصفهان', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 10, airline: 'قشم ایر', price: 2900000, flightNumber: 'QH-103', seatNumber: '14C', date: { year: 1403, month: 10, day: 14 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 4, origin: 'تبریز', destination: 'کیش', timeOfDay: 'شب', ticketsRemaining: 30, airline: 'کاسپین', price: 4000000, flightNumber: 'CS-104', seatNumber: '18D', date: { year: 1403, month: 10, day: 15 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 5, origin: 'شیراز', destination: 'اصفهان', timeOfDay: 'روز', ticketsRemaining: 20, airline: 'آسمان', price: 2600000, flightNumber: 'AS-105', seatNumber: '20A', date: { year: 1403, month: 10, day: 16 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 6, origin: 'کیش', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 18, airline: 'تابان ایر', price: 3600000, flightNumber: 'TB-106', seatNumber: '22B', date: { year: 1403, month: 10, day: 17 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 7, origin: 'تهران', destination: 'تبریز', timeOfDay: 'روز', ticketsRemaining: 12, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-107', seatNumber: '25C', date: { year: 1403, month: 10, day: 18 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 8, origin: 'مشهد', destination: 'شیراز', timeOfDay: 'شب', ticketsRemaining: 17, airline: 'ماهان ایر', price: 3000000, flightNumber: 'MH-108', seatNumber: '30D', date: { year: 1403, month: 10, day: 19 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 9, origin: 'اصفهان', destination: 'تهران', timeOfDay: 'روز', ticketsRemaining: 22, airline: 'قشم ایر', price: 2500000, flightNumber: 'QH-109', seatNumber: '12A', date: { year: 1403, month: 10, day: 20 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 10, origin: 'تبریز', destination: 'مشهد', timeOfDay: 'شب', ticketsRemaining: 35, airline: 'کاسپین', price: 3900000, flightNumber: 'CS-110', seatNumber: '15B', date: { year: 1403, month: 10, day: 21 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 11, origin: 'تهران', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 25, airline: 'ایران ایر', price: 2800000, flightNumber: 'IR-101', seatNumber: '11A', date: { year: 1403, month: 10, day: 12 }, ticketType: 'چارتر', class: 'بیزینس' }, 
    { id: 12, origin: 'کیش', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 7, airline: 'تابان ایر', price: 3500000, flightNumber: 'TB-112', seatNumber: '19D', date: { year: 1403, month: 10, day: 23 }, ticketType: 'سیستمی', class: 'اکونومی' },    
    { id: 13, origin: 'تهران', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 25, airline: 'ایران ایر', price: 3200000, flightNumber: 'IR-113', seatNumber: '21A', date: { year: 1403, month: 10, day: 24 }, ticketType: 'چارتر', class: 'اکونومی' }, 
    { id: 14, origin: 'مشهد', destination: 'تبریز', timeOfDay: 'شب', ticketsRemaining: 10, airline: 'ماهان ایر', price: 3100000, flightNumber: 'MH-114', seatNumber: '23B', date: { year: 1403, month: 10, day: 25 }, ticketType: 'سیستمی', class: 'بیزینس' }, 
    { id: 15, origin: 'اصفهان', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 3, airline: 'قشم ایر', price: 2700000, flightNumber: 'QH-115', seatNumber: '25C', date: { year: 1403, month: 10, day: 26 }, ticketType: 'چارتر', class: 'اکونومی' }, 
    { id: 16, origin: 'تبریز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 8, airline: 'کاسپین', price: 2400000, flightNumber: 'CS-116', seatNumber: '27D', date: { year: 1403, month: 10, day: 27 }, ticketType: 'سیستمی', class: 'اکونومی' }, 
    { id: 17, origin: 'شیراز', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 14, airline: 'آسمان', price: 3300000, flightNumber: 'AS-117', seatNumber: '30A', date: { year: 1403, month: 10, day: 28 }, ticketType: 'چارتر', class: 'بیزینس' }, 
    { id: 18, origin: 'کیش', destination: 'تبریز', timeOfDay: 'شب', ticketsRemaining: 19, airline: 'تابان ایر', price: 3700000, flightNumber: 'TB-118', seatNumber: '12B', date: { year: 1403, month: 10, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' }, 
    { id: 19, origin: 'تهران', destination: 'اصفهان', timeOfDay: 'روز', ticketsRemaining: 28, airline: 'ایران ایر', price: 2300000, flightNumber: 'IR-119', seatNumber: '14C', date: { year: 1403, month: 10, day: 30 }, ticketType: 'چارتر', class: 'اکونومی' }, 
    { id: 20, origin: 'مشهد', destination: 'کیش', timeOfDay: 'شب', ticketsRemaining: 12, airline: 'ماهان ایر', price: 3800000, flightNumber: 'MH-120', seatNumber: '16D', date: { year: 1403, month: 10, day: 31 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 21, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 15, airline: 'ماهان ایر', price: 3200000, flightNumber: 'MH-121', seatNumber: '21C', date: { year: 1403, month: 10, day: 30 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 22, origin: 'تبریز', destination: 'شیراز', timeOfDay: 'شب', ticketsRemaining: 32, airline: 'کاسپین', price: 3400000, flightNumber: 'CS-122', seatNumber: '20B', date: { year: 1403, month: 11, day: 2 }, ticketType: 'سیستمی', class: 'اکونومی' },    
    { id: 23, origin: 'شیراز', destination: 'تهران', timeOfDay: 'روز', ticketsRemaining: 5, airline: 'آسمان', price: 2400000, flightNumber: 'AS-123', seatNumber: '22C', date: { year: 1403, month: 11, day: 3 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 24, origin: 'کیش', destination: 'مشهد', timeOfDay: 'شب', ticketsRemaining: 21, airline: 'تابان ایر', price: 4100000, flightNumber: 'TB-124', seatNumber: '24D', date: { year: 1403, month: 11, day: 4 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 25, origin: 'تهران', destination: 'کیش', timeOfDay: 'روز', ticketsRemaining: 16, airline: 'ایران ایر', price: 3600000, flightNumber: 'IR-125', seatNumber: '26A', date: { year: 1403, month: 11, day: 5 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 26, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 14, airline: 'ماهان ایر', price: 2900000, flightNumber: 'MH-126', seatNumber: '28B', date: { year: 1403, month: 11, day: 6 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 27, origin: 'اصفهان', destination: 'تهران', timeOfDay: 'روز', ticketsRemaining: 7, airline: 'قشم ایر', price: 2200000, flightNumber: 'QH-127', seatNumber: '30C', date: { year: 1403, month: 11, day: 7 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 28, origin: 'تبریز', destination: 'مشهد', timeOfDay: 'شب', ticketsRemaining: 11, airline: 'کاسپین', price: 3800000, flightNumber: 'CS-128', seatNumber: '12D', date: { year: 1403, month: 11, day: 8 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 29, origin: 'شیراز', destination: 'تبریز', timeOfDay: 'روز', ticketsRemaining: 9, airline: 'آسمان', price: 3200000, flightNumber: 'AS-129', seatNumber: '13A', date: { year: 1403, month: 11, day: 9 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 30, origin: 'کیش', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 6, airline: 'تابان ایر', price: 3300000, flightNumber: 'TB-130', seatNumber: '14B', date: { year: 1403, month: 11, day: 10 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 31, origin: 'تهران', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 15, airline: 'ایران ایر', price: 3100000, flightNumber: 'IR-131', seatNumber: '15C', date: { year: 1403, month: 11, day: 11 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 32, origin: 'مشهد', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 8, airline: 'ماهان ایر', price: 2800000, flightNumber: 'MH-132', seatNumber: '16D', date: { year: 1403, month: 11, day: 12 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 33, origin: 'اصفهان', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 13, airline: 'قشم ایر', price: 2700000, flightNumber: 'QH-133', seatNumber: '17A', date: { year: 1403, month: 11, day: 13 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 34, origin: 'تبریز', destination: 'کیش', timeOfDay: 'شب', ticketsRemaining: 26, airline: 'کاسپین', price: 3900000, flightNumber: 'CS-134', seatNumber: '18B', date: { year: 1403, month: 11, day: 14 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 35, origin: 'شیراز', destination: 'اصفهان', timeOfDay: 'روز', ticketsRemaining: 17, airline: 'آسمان', price: 2500000, flightNumber: 'AS-135', seatNumber: '19C', date: { year: 1403, month: 11, day: 14 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 37, origin: 'تبریز', destination: 'مشهد', timeOfDay: 'شب', ticketsRemaining: 10, airline: 'کاسپین', price: 3000000, flightNumber: 'CS-137', seatNumber: '21B', date: { year: 1403, month: 11, day: 16 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 38, origin: 'مشهد', destination: 'شیراز', timeOfDay: 'شب', ticketsRemaining: 8, airline: 'ماهان ایر', price: 3000000, flightNumber: 'MH-137', seatNumber: '21A', date: { year: 1403, month: 11, day: 17 }, ticketType: 'سیستمی', class: 'اکونومی' },    
    { id: 39, origin: 'اصفهان', destination: 'کیش', timeOfDay: 'روز', ticketsRemaining: 19, airline: 'قشم ایر', price: 3200000, flightNumber: 'QH-138', seatNumber: '22B', date: { year: 1403, month: 11, day: 18 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 40, origin: 'تبریز', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 9, airline: 'کاسپین', price: 2500000, flightNumber: 'CS-139', seatNumber: '23C', date: { year: 1403, month: 11, day: 19 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 41, origin: 'شیراز', destination: 'تهران', timeOfDay: 'روز', ticketsRemaining: 7, airline: 'آسمان', price: 2600000, flightNumber: 'AS-140', seatNumber: '24D', date: { year: 1403, month: 11, day: 20 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 42, origin: 'کیش', destination: 'مشهد', timeOfDay: 'شب', ticketsRemaining: 14, airline: 'تابان ایر', price: 3700000, flightNumber: 'TB-141', seatNumber: '25A', date: { year: 1403, month: 11, day: 21 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 43, origin: 'تهران', destination: 'کیش', timeOfDay: 'روز', ticketsRemaining: 22, airline: 'ایران ایر', price: 3300000, flightNumber: 'IR-142', seatNumber: '26B', date: { year: 1403, month: 11, day: 22 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 44, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 12, airline: 'ماهان ایر', price: 2900000, flightNumber: 'MH-143', seatNumber: '27C', date: { year: 1403, month: 11, day: 23 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 45, origin: 'اصفهان', destination: 'تهران', timeOfDay: 'روز', ticketsRemaining: 6, airline: 'قشم ایر', price: 2400000, flightNumber: 'QH-144', seatNumber: '28D', date: { year: 1403, month: 11, day: 30 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 46, origin: 'تبریز', destination: 'مشهد', timeOfDay: 'شب', ticketsRemaining: 16, airline: 'کاسپین', price: 3100000, flightNumber: 'CS-145', seatNumber: '29A', date: { year: 1403, month: 11, day: 25 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 47, origin: 'شیراز', destination: 'تبریز', timeOfDay: 'روز', ticketsRemaining: 9, airline: 'آسمان', price: 3300000, flightNumber: 'AS-146', seatNumber: '30B', date: { year: 1403, month: 11, day: 26 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 48, origin: 'کیش', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 18, airline: 'تابان ایر', price: 3500000, flightNumber: 'TB-147', seatNumber: '31C', date: { year: 1403, month: 11, day: 27 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 49, origin: 'تهران', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 10, airline: 'ایران ایر', price: 3100000, flightNumber: 'IR-148', seatNumber: '32D', date: { year: 1403, month: 11, day: 28 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 50, origin: 'مشهد', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 7, airline: 'ماهان ایر', price: 2700000, flightNumber: 'MH-149', seatNumber: '33A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 51, origin: 'اصفهان', destination: 'شیراز', timeOfDay: 'صبح', ticketsRemaining: 5, airline: 'ایران ایر', price: 2500000, flightNumber: 'IR-112', seatNumber: '12B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 52, origin: 'تبریز', destination: 'اهواز', timeOfDay: 'عصر', ticketsRemaining: 3, airline: 'کاسپین', price: 2900000, flightNumber: 'CP-207', seatNumber: '18C', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 53, origin: 'کرمان', destination: 'رشت', timeOfDay: 'ظهر', ticketsRemaining: 6, airline: 'ماهان ایر', price: 2800000, flightNumber: 'MH-222', seatNumber: '14D', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 54, origin: 'تهران', destination: 'مشهد', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'ایران ایر', price: 2600000, flightNumber: 'IR-333', seatNumber: '22A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 55, origin: 'شیراز', destination: 'کرمان', timeOfDay: 'صبح', ticketsRemaining: 2, airline: 'کاسپین', price: 2200000, flightNumber: 'CP-158', seatNumber: '31B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 56, origin: 'رشت', destination: 'اصفهان', timeOfDay: 'ظهر', ticketsRemaining: 8, airline: 'ماهان ایر', price: 3000000, flightNumber: 'MH-450', seatNumber: '27C', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 57, origin: 'اهواز', destination: 'تبریز', timeOfDay: 'عصر', ticketsRemaining: 7, airline: 'ایران ایرتور', price: 2400000, flightNumber: 'IT-106', seatNumber: '19D', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 58, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'کاسپین', price: 2700000, flightNumber: 'CP-114', seatNumber: '23A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 59, origin: 'تهران', destination: 'تبریز', timeOfDay: 'صبح', ticketsRemaining: 6, airline: 'ماهان ایر', price: 2500000, flightNumber: 'MH-390', seatNumber: '29B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 60, origin: 'کرمان', destination: 'رشت', timeOfDay: 'عصر', ticketsRemaining: 3, airline: 'ایران ایر', price: 2800000, flightNumber: 'IR-175', seatNumber: '20C', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 61, origin: 'شیراز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'کاسپین', price: 2600000, flightNumber: 'CP-148', seatNumber: '17A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 62, origin: 'رشت', destination: 'مشهد', timeOfDay: 'ظهر', ticketsRemaining: 8, airline: 'ایران ایر', price: 3000000, flightNumber: 'IR-312', seatNumber: '16D', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 63, origin: 'اهواز', destination: 'شیراز', timeOfDay: 'عصر', ticketsRemaining: 5, airline: 'ماهان ایر', price: 2400000, flightNumber: 'MH-210', seatNumber: '15B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 64, origin: 'تبریز', destination: 'کرمان', timeOfDay: 'صبح', ticketsRemaining: 7, airline: 'ایران ایرتور', price: 2700000, flightNumber: 'IT-122', seatNumber: '18A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 65, origin: 'مشهد', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 9, airline: 'کاسپین', price: 2500000, flightNumber: 'CP-130', seatNumber: '12C', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 66, origin: 'تهران', destination: 'رشت', timeOfDay: 'عصر', ticketsRemaining: 6, airline: 'ماهان ایر', price: 2900000, flightNumber: 'MH-415', seatNumber: '21B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 67, origin: 'اصفهان', destination: 'اهواز', timeOfDay: 'ظهر', ticketsRemaining: 4, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-150', seatNumber: '22D', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 68, origin: 'شیراز', destination: 'تبریز', timeOfDay: 'صبح', ticketsRemaining: 7, airline: 'کاسپین', price: 2600000, flightNumber: 'CP-108', seatNumber: '13A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 69, origin: 'تهران', destination: 'اهواز', timeOfDay: 'عصر', ticketsRemaining: 5, airline: 'ایران ایرتور', price: 2800000, flightNumber: 'IT-154', seatNumber: '11B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 70, origin: 'رشت', destination: 'اصفهان', timeOfDay: 'ظهر', ticketsRemaining: 8, airline: 'ماهان ایر', price: 3000000, flightNumber: 'MH-275', seatNumber: '30A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 71, origin: 'اهواز', destination: 'شیراز', timeOfDay: 'شب', ticketsRemaining: 2, airline: 'ایران ایر', price: 2300000, flightNumber: 'IR-230', seatNumber: '21C', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 72, origin: 'تبریز', destination: 'تهران', timeOfDay: 'صبح', ticketsRemaining: 6, airline: 'کاسپین', price: 2500000, flightNumber: 'CP-345', seatNumber: '19B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 73, origin: 'مشهد', destination: 'رشت', timeOfDay: 'ظهر', ticketsRemaining: 4, airline: 'ماهان ایر', price: 2700000, flightNumber: 'MH-487', seatNumber: '10A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 74, origin: 'تهران', destination: 'شیراز', timeOfDay: 'عصر', ticketsRemaining: 5, airline: 'ایران ایرتور', price: 2900000, flightNumber: 'IT-198', seatNumber: '28C', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 75, origin: 'کرمان', destination: 'اهواز', timeOfDay: 'صبح', ticketsRemaining: 3, airline: 'کاسپین', price: 2500000, flightNumber: 'CP-256', seatNumber: '29D', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 76, origin: 'اصفهان', destination: 'تبریز', timeOfDay: 'ظهر', ticketsRemaining: 7, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-177', seatNumber: '17B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 77, origin: 'شیراز', destination: 'رشت', timeOfDay: 'عصر', ticketsRemaining: 8, airline: 'ماهان ایر', price: 3000000, flightNumber: 'MH-413', seatNumber: '15C', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 78, origin: 'تهران', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'ایران ایرتور', price: 2400000, flightNumber: 'IT-202', seatNumber: '22A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 79, origin: 'تبریز', destination: 'مشهد', timeOfDay: 'صبح', ticketsRemaining: 9, airline: 'کاسپین', price: 2800000, flightNumber: 'CP-167', seatNumber: '12D', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 80, origin: 'مشهد', destination: 'کرمان', timeOfDay: 'عصر', ticketsRemaining: 6, airline: 'ماهان ایر', price: 2500000, flightNumber: 'MH-319', seatNumber: '11A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 81, origin: 'تهران', destination: 'شیراز', timeOfDay: 'صبح', ticketsRemaining: 6, airline: 'کاسپین', price: 2400000, flightNumber: 'CP-211', seatNumber: '18A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 82, origin: 'مشهد', destination: 'اهواز', timeOfDay: 'عصر', ticketsRemaining: 4, airline: 'ماهان ایر', price: 2600000, flightNumber: 'MH-324', seatNumber: '16C', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 83, origin: 'اصفهان', destination: 'کرمان', timeOfDay: 'ظهر', ticketsRemaining: 7, airline: 'ایران ایر', price: 2500000, flightNumber: 'IR-135', seatNumber: '21D', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 84, origin: 'تبریز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 3, airline: 'کاسپین', price: 2700000, flightNumber: 'CP-421', seatNumber: '25B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 85, origin: 'رشت', destination: 'مشهد', timeOfDay: 'صبح', ticketsRemaining: 5, airline: 'ایران ایرتور', price: 2800000, flightNumber: 'IT-258', seatNumber: '12A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 86, origin: 'اهواز', destination: 'شیراز', timeOfDay: 'ظهر', ticketsRemaining: 6, airline: 'ماهان ایر', price: 2600000, flightNumber: 'MH-517', seatNumber: '14C', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 87, origin: 'کرمان', destination: 'اصفهان', timeOfDay: 'عصر', ticketsRemaining: 9, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-280', seatNumber: '19B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 88, origin: 'تهران', destination: 'تبریز', timeOfDay: 'شب', ticketsRemaining: 7, airline: 'کاسپین', price: 2400000, flightNumber: 'CP-345', seatNumber: '15D', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 89, origin: 'شیراز', destination: 'رشت', timeOfDay: 'صبح', ticketsRemaining: 4, airline: 'ایران ایرتور', price: 2500000, flightNumber: 'IT-369', seatNumber: '13B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 90, origin: 'مشهد', destination: 'تهران', timeOfDay: 'عصر', ticketsRemaining: 3, airline: 'ماهان ایر', price: 2900000, flightNumber: 'MH-193', seatNumber: '17A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 91, origin: 'اصفهان', destination: 'تبریز', timeOfDay: 'شب', ticketsRemaining: 6, airline: 'ایران ایر', price: 2300000, flightNumber: 'IR-108', seatNumber: '24C', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 92, origin: 'تبریز', destination: 'کرمان', timeOfDay: 'ظهر', ticketsRemaining: 5, airline: 'کاسپین', price: 2700000, flightNumber: 'CP-289', seatNumber: '18B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 93, origin: 'رشت', destination: 'شیراز', timeOfDay: 'صبح', ticketsRemaining: 8, airline: 'ماهان ایر', price: 3000000, flightNumber: 'MH-264', seatNumber: '22A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 94, origin: 'اهواز', destination: 'اصفهان', timeOfDay: 'عصر', ticketsRemaining: 4, airline: 'ایران ایرتور', price: 2800000, flightNumber: 'IT-213', seatNumber: '20C', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 95, origin: 'کرمان', destination: 'تهران', timeOfDay: 'صبح', ticketsRemaining: 7, airline: 'کاسپین', price: 2500000, flightNumber: 'CP-370', seatNumber: '21D', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 96, origin: 'تهران', destination: 'مشهد', timeOfDay: 'ظهر', ticketsRemaining: 6, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-490', seatNumber: '11B', date: { year: 1403, month: 11, day: 29 }, ticketType: 'سیستمی', class: 'اکونومی'},
    { id: 97, origin: 'شیراز', destination: 'تهران', timeOfDay: 'عصر', ticketsRemaining: 7, airline: 'ماهان ایر', price: 2800000, flightNumber: 'MH-241', seatNumber: '15A', date: { year: 1403, month: 1, day: 15 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 98, origin: 'تبریز', destination: 'مشهد', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'کاسپین', price: 2900000, flightNumber: 'CP-342', seatNumber: '23C', date: { year: 1403, month: 2, day: 18 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 99, origin: 'رشت', destination: 'کرمان', timeOfDay: 'ظهر', ticketsRemaining: 4, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-481', seatNumber: '16D', date: { year: 1403, month: 3, day: 22 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 100, origin: 'اهواز', destination: 'شیراز', timeOfDay: 'صبح', ticketsRemaining: 6, airline: 'ایران ایرتور', price: 2500000, flightNumber: 'IT-192', seatNumber: '18B', date: { year: 1403, month: 1, day: 10 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 101, origin: 'کرمان', destination: 'تبریز', timeOfDay: 'عصر', ticketsRemaining: 8, airline: 'ماهان ایر', price: 3000000, flightNumber: 'MH-231', seatNumber: '22A', date: { year: 1403, month: 2, day: 28 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 102, origin: 'تهران', destination: 'اهواز', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'کاسپین', price: 2600000, flightNumber: 'CP-156', seatNumber: '21C', date: { year: 1403, month: 1, day: 12 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 103, origin: 'اصفهان', destination: 'مشهد', timeOfDay: 'ظهر', ticketsRemaining: 9, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-217', seatNumber: '19B', date: { year: 1403, month: 3, day: 5 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 104, origin: 'مشهد', destination: 'رشت', timeOfDay: 'صبح', ticketsRemaining: 3, airline: 'ماهان ایر', price: 2900000, flightNumber: 'MH-348', seatNumber: '14D', date: { year: 1403, month: 2, day: 6 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 105, origin: 'شیراز', destination: 'کرمان', timeOfDay: 'عصر', ticketsRemaining: 7, airline: 'ایران ایرتور', price: 2500000, flightNumber: 'IT-399', seatNumber: '13A', date: { year: 1403, month: 1, day: 20 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 106, origin: 'تهران', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'کاسپین', price: 2400000, flightNumber: 'CP-278', seatNumber: '17C', date: { year: 1403, month: 3, day: 12 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 107, origin: 'تبریز', destination: 'اهواز', timeOfDay: 'صبح', ticketsRemaining: 6, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-471', seatNumber: '11B', date: { year: 1403, month: 2, day: 23 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 108, origin: 'رشت', destination: 'تهران', timeOfDay: 'عصر', ticketsRemaining: 5, airline: 'ماهان ایر', price: 2800000, flightNumber: 'MH-263', seatNumber: '16C', date: { year: 1403, month: 1, day: 7 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 109, origin: 'اهواز', destination: 'اصفهان', timeOfDay: 'ظهر', ticketsRemaining: 4, airline: 'ایران ایرتور', price: 2900000, flightNumber: 'IT-376', seatNumber: '22A', date: { year: 1403, month: 3, day: 18 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 110, origin: 'کرمان', destination: 'مشهد', timeOfDay: 'صبح', ticketsRemaining: 6, airline: 'ایران ایر', price: 2500000, flightNumber: 'IR-452', seatNumber: '14D', date: { year: 1403, month: 2, day: 11 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 111, origin: 'اصفهان', destination: 'تهران', timeOfDay: 'عصر', ticketsRemaining: 8, airline: 'کاسپین', price: 2600000, flightNumber: 'CP-193', seatNumber: '18B', date: { year: 1403, month: 1, day: 22 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 112, origin: 'تهران', destination: 'تبریز', timeOfDay: 'شب', ticketsRemaining: 7, airline: 'ماهان ایر', price: 2700000, flightNumber: 'MH-284', seatNumber: '11C', date: { year: 1403, month: 3, day: 14 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 113, origin: 'شیراز', destination: 'رشت', timeOfDay: 'ظهر', ticketsRemaining: 5, airline: 'ایران ایرتور', price: 2800000, flightNumber: 'IT-157', seatNumber: '21A', date: { year: 1403, month: 2, day: 9 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 114, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'صبح', ticketsRemaining: 3, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-329', seatNumber: '13D', date: { year: 1403, month: 1, day: 17 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 115, origin: 'کرمان', destination: 'رشت', timeOfDay: 'عصر', ticketsRemaining: 6, airline: 'کاسپین', price: 2900000, flightNumber: 'CP-421', seatNumber: '20B', date: { year: 1403, month: 2, day: 21 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 116, origin: 'تبریز', destination: 'شیراز', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'ماهان ایر', price: 3000000, flightNumber: 'MH-238', seatNumber: '23C', date: { year: 1403, month: 1, day: 30 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 117, origin: 'اهواز', destination: 'تهران', timeOfDay: 'ظهر', ticketsRemaining: 4, airline: 'ایران ایر', price: 2400000, flightNumber: 'IR-142', seatNumber: '12A', date: { year: 1403, month: 3, day: 10 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 118, origin: 'رشت', destination: 'مشهد', timeOfDay: 'عصر', ticketsRemaining: 7, airline: 'ایران ایرتور', price: 2700000, flightNumber: 'IT-489', seatNumber: '14D', date: { year: 1403, month: 2, day: 16 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 119, origin: 'تهران', destination: 'شیراز', timeOfDay: 'صبح', ticketsRemaining: 6, airline: 'کاسپین', price: 2600000, flightNumber: 'CP-197', seatNumber: '17B', date: { year: 1403, month: 1, day: 25 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 120, origin: 'تبریز', destination: 'کرمان', timeOfDay: 'شب', ticketsRemaining: 3, airline: 'ماهان ایر', price: 2800000, flightNumber: 'MH-358', seatNumber: '16C', date: { year: 1403, month: 3, day: 7 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 121, origin: 'مشهد', destination: 'اهواز', timeOfDay: 'ظهر', ticketsRemaining: 8, airline: 'ایران ایر', price: 2500000, flightNumber: 'IR-274', seatNumber: '19A', date: { year: 1403, month: 1, day: 13 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 122, origin: 'شیراز', destination: 'اصفهان', timeOfDay: 'صبح', ticketsRemaining: 5, airline: 'ایران ایرتور', price: 2700000, flightNumber: 'IT-295', seatNumber: '15D', date: { year: 1403, month: 2, day: 2 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 123, origin: 'کرمان', destination: 'تهران', timeOfDay: 'عصر', ticketsRemaining: 4, airline: 'ماهان ایر', price: 2900000, flightNumber: 'MH-198', seatNumber: '11C', date: { year: 1403, month: 3, day: 20 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 124, origin: 'تهران', destination: 'مشهد', timeOfDay: 'صبح', ticketsRemaining: 6, airline: 'کاسپین', price: 2600000, flightNumber: 'CP-182', seatNumber: '18A', date: { year: 1403, month: 1, day: 9 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 125, origin: 'رشت', destination: 'تهران', timeOfDay: 'ظهر', ticketsRemaining: 9, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-114', seatNumber: '13B', date: { year: 1403, month: 2, day: 17 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 126, origin: 'تبریز', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 3, airline: 'ماهان ایر', price: 3000000, flightNumber: 'MH-381', seatNumber: '12D', date: { year: 1403, month: 1, day: 24 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 127, origin: 'اهواز', destination: 'مشهد', timeOfDay: 'عصر', ticketsRemaining: 4, airline: 'کاسپین', price: 2700000, flightNumber: 'CP-319', seatNumber: '14A', date: { year: 1403, month: 3, day: 19 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 128, origin: 'اصفهان', destination: 'کرمان', timeOfDay: 'ظهر', ticketsRemaining: 5, airline: 'ایران ایرتور', price: 2400000, flightNumber: 'IT-490', seatNumber: '11B', date: { year: 1403, month: 2, day: 14 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 129, origin: 'تهران', destination: 'رشت', timeOfDay: 'صبح', ticketsRemaining: 8, airline: 'ماهان ایر', price: 2900000, flightNumber: 'MH-212', seatNumber: '23C', date: { year: 1403, month: 1, day: 14 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 130, origin: 'تهران', destination: 'شیراز', timeOfDay: 'ظهر', ticketsRemaining: 5, airline: 'ایران ایر', price: 2800000, flightNumber: 'IR-157', seatNumber: '12B', date: { year: 1403, month: 4, day: 5 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 131, origin: 'اهواز', destination: 'تبریز', timeOfDay: 'عصر', ticketsRemaining: 3, airline: 'ماهان ایر', price: 2900000, flightNumber: 'MH-245', seatNumber: '14D', date: { year: 1403, month: 5, day: 12 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 132, origin: 'رشت', destination: 'مشهد', timeOfDay: 'صبح', ticketsRemaining: 6, airline: 'کاسپین', price: 2600000, flightNumber: 'CP-213', seatNumber: '11A', date: { year: 1403, month: 6, day: 8 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 133, origin: 'کرمان', destination: 'اصفهان', timeOfDay: 'ظهر', ticketsRemaining: 4, airline: 'ایران ایرتور', price: 2700000, flightNumber: 'IT-179', seatNumber: '15C', date: { year: 1403, month: 4, day: 15 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 134, origin: 'شیراز', destination: 'کرمان', timeOfDay: 'عصر', ticketsRemaining: 5, airline: 'ماهان ایر', price: 2800000, flightNumber: 'MH-211', seatNumber: '20B', date: { year: 1403, month: 5, day: 25 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 135, origin: 'تبریز', destination: 'مشهد', timeOfDay: 'شب', ticketsRemaining: 7, airline: 'کاسپین', price: 2500000, flightNumber: 'CP-112', seatNumber: '22D', date: { year: 1403, month: 6, day: 20 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 136, origin: 'اصفهان', destination: 'تهران', timeOfDay: 'صبح', ticketsRemaining: 8, airline: 'ایران ایر', price: 2600000, flightNumber: 'IR-354', seatNumber: '16C', date: { year: 1403, month: 4, day: 10 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 137, origin: 'کرمان', destination: 'اهواز', timeOfDay: 'ظهر', ticketsRemaining: 6, airline: 'ماهان ایر', price: 2700000, flightNumber: 'MH-134', seatNumber: '19A', date: { year: 1403, month: 5, day: 30 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 138, origin: 'تهران', destination: 'تبریز', timeOfDay: 'عصر', ticketsRemaining: 5, airline: 'کاسپین', price: 2900000, flightNumber: 'CP-288', seatNumber: '21B', date: { year: 1403, month: 6, day: 5 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 139, origin: 'مشهد', destination: 'رشت', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'ایران ایرتور', price: 2400000, flightNumber: 'IT-495', seatNumber: '11C', date: { year: 1403, month: 4, day: 24 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 140, origin: 'شیراز', destination: 'اصفهان', timeOfDay: 'صبح', ticketsRemaining: 3, airline: 'ماهان ایر', price: 2800000, flightNumber: 'MH-211', seatNumber: '12D', date: { year: 1403, month: 5, day: 18 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 141, origin: 'تبریز', destination: 'اهواز', timeOfDay: 'ظهر', ticketsRemaining: 6, airline: 'کاسپین', price: 2600000, flightNumber: 'CP-123', seatNumber: '14A', date: { year: 1403, month: 6, day: 16 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 142, origin: 'اهواز', destination: 'تهران', timeOfDay: 'عصر', ticketsRemaining: 5, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-191', seatNumber: '18B', date: { year: 1403, month: 4, day: 21 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 143, origin: 'رشت', destination: 'مشهد', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'ماهان ایر', price: 2900000, flightNumber: 'MH-284', seatNumber: '22D', date: { year: 1403, month: 5, day: 1 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 144, origin: 'مشهد', destination: 'کرمان', timeOfDay: 'صبح', ticketsRemaining: 8, airline: 'ایران ایرتور', price: 2600000, flightNumber: 'IT-214', seatNumber: '17C', date: { year: 1403, month: 6, day: 7 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 145, origin: 'تهران', destination: 'اصفهان', timeOfDay: 'ظهر', ticketsRemaining: 6, airline: 'کاسپین', price: 2700000, flightNumber: 'CP-399', seatNumber: '11B', date: { year: 1403, month: 5, day: 3 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 146, origin: 'کرمان', destination: 'تبریز', timeOfDay: 'عصر', ticketsRemaining: 5, airline: 'ماهان ایر', price: 2800000, flightNumber: 'MH-385', seatNumber: '20A', date: { year: 1403, month: 6, day: 10 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 147, origin: 'اصفهان', destination: 'شیراز', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'ایران ایر', price: 2900000, flightNumber: 'IR-182', seatNumber: '19C', date: { year: 1403, month: 4, day: 9 }, ticketType: 'چارتر', class: 'بیزنس' },
    { id: 148, origin: 'تبریز', destination: 'کرمان', timeOfDay: 'صبح', ticketsRemaining: 7, airline: 'کاسپین', price: 2400000, flightNumber: 'CP-115', seatNumber: '14D', date: { year: 1403, month: 5, day: 17 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 149, origin: 'شیراز', destination: 'مشهد', timeOfDay: 'ظهر', ticketsRemaining: 3, airline: 'ماهان ایر', price: 2800000, flightNumber: 'MH-467', seatNumber: '12B', date: { year: 1403, month: 6, day: 2 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 150, origin: 'تهران', destination: 'رشت', timeOfDay: 'عصر', ticketsRemaining: 5, airline: 'ایران ایرتور', price: 2600000, flightNumber: 'IT-256', seatNumber: '13A', date: { year: 1403, month: 4, day: 30 }, ticketType: 'سیستمی', class: 'بیزنس' },
    { id: 151, origin: 'اصفهان', destination: 'تهران', timeOfDay: 'روز', ticketsRemaining: 7, airline: ' ایران ایر', price: 2200000, flightNumber: 'QH-127', seatNumber: '30C', date: { year: 1403, month: 11, day: 7 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 152, origin: 'تهران', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'ایران ایرتور', price: 2400000, flightNumber: 'IT-202', seatNumber: '22A', date: { year: 1403, month: 11, day: 29 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 153, origin: 'اصفهان', destination: 'مشهد', timeOfDay: 'شب', ticketsRemaining: 3, airline: 'ایران ایر', price: 2500000, flightNumber: 'IR-328', seatNumber: '18B', date: { year: 1403, month: 11, day: 10 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 154, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'روز', ticketsRemaining: 9, airline: 'ماهان ایر', price: 2100000, flightNumber: 'W5-431', seatNumber: '12C', date: { year: 1403, month: 11, day: 12 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 155, origin: 'تهران', destination: 'شیراز', timeOfDay: 'شب', ticketsRemaining: 6, airline: 'کیش ایر', price: 2300000, flightNumber: 'K5-501', seatNumber: '15A', date: { year: 1403, month: 11, day: 15 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 156, origin: 'شیراز', destination: 'تهران', timeOfDay: 'روز', ticketsRemaining: 8, airline: 'آسمان', price: 2000000, flightNumber: 'EP-607', seatNumber: '9B', date: { year: 1403, month: 11, day: 17 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 157, origin: 'اصفهان', destination: 'تبریز', timeOfDay: 'روز', ticketsRemaining: 7, airline: 'کاسپین', price: 2400000, flightNumber: 'IV-110', seatNumber: '14C', date: { year: 1403, month: 11, day: 19 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 158, origin: 'تبریز', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'آتا ایر', price: 2600000, flightNumber: 'I3-208', seatNumber: '11A', date: { year: 1403, month: 11, day: 21 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 159, origin: 'تهران', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 6, airline: 'زاگرس', price: 2200000, flightNumber: 'IZ-311', seatNumber: '19B', date: { year: 1403, month: 11, day: 23 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 160, origin: 'مشهد', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'ایران ایر', price: 2300000, flightNumber: 'IR-323', seatNumber: '13C', date: { year: 1403, month: 11, day: 25 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 161, origin: 'شیراز', destination: 'اصفهان', timeOfDay: 'روز', ticketsRemaining: 7, airline: 'ماهان ایر', price: 2700000, flightNumber: 'W5-445', seatNumber: '16A', date: { year: 1403, month: 11, day: 27 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 162, origin: 'اصفهان', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 9, airline: 'زاگرس', price: 2500000, flightNumber: 'IZ-129', seatNumber: '20B', date: { year: 1403, month: 11, day: 30 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 163, origin: 'تهران', destination: 'کیش', timeOfDay: 'روز', ticketsRemaining: 6, airline: 'کیش ایر', price: 2900000, flightNumber: 'K5-502', seatNumber: '17C', date: { year: 1403, month: 12, day: 1 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 164, origin: 'کیش', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 8, airline: 'کیش ایر', price: 3100000, flightNumber: 'K5-503', seatNumber: '18A', date: { year: 1403, month: 12, day: 3 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 165, origin: 'اصفهان', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 4, airline: 'آسمان', price: 2600000, flightNumber: 'EP-625', seatNumber: '14B', date: { year: 1403, month: 12, day: 5 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 166, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 7, airline: 'ماهان ایر', price: 2700000, flightNumber: 'W5-432', seatNumber: '12A', date: { year: 1403, month: 12, day: 7 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 167, origin: 'تهران', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 5, airline: 'کاسپین', price: 2500000, flightNumber: 'IV-103', seatNumber: '11B', date: { year: 1403, month: 12, day: 10 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 168, origin: 'شیراز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 9, airline: 'زاگرس', price: 2200000, flightNumber: 'IZ-320', seatNumber: '15C', date: { year: 1403, month: 12, day: 12 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 169, origin: 'تبریز', destination: 'اصفهان', timeOfDay: 'روز', ticketsRemaining: 3, airline: 'آتا ایر', price: 2400000, flightNumber: 'I3-212', seatNumber: '16A', date: { year: 1403, month: 12, day: 14 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 170, origin: 'اصفهان', destination: 'تبریز', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'ایران ایر', price: 2600000, flightNumber: 'IR-124', seatNumber: '19B', date: { year: 1403, month: 12, day: 16 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 171, origin: 'تهران', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 6, airline: 'ماهان ایر', price: 2300000, flightNumber: 'W5-328', seatNumber: '11A', date: { year: 1403, month: 12, day: 18 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 172, origin: 'مشهد', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 7, airline: 'زاگرس', price: 2500000, flightNumber: 'IZ-311', seatNumber: '12C', date: { year: 1403, month: 12, day: 20 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 173, origin: 'اصفهان', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 4, airline: 'آتا ایر', price: 2200000, flightNumber: 'I3-414', seatNumber: '17A', date: { year: 1403, month: 12, day: 23 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 174, origin: 'شیراز', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 6, airline: 'ایران ایرتور', price: 2300000, flightNumber: 'IT-604', seatNumber: '14B', date: { year: 1403, month: 12, day: 25 }, ticketType: 'چارتر', class: 'بیزینس' },
    { id: 175, origin: 'تهران', destination: 'کیش', timeOfDay: 'روز', ticketsRemaining: 5, airline: 'کیش ایر', price: 2900000, flightNumber: 'K5-505', seatNumber: '15A', date: { year: 1403, month: 12, day: 28 }, ticketType: 'سیستمی', class: 'اکونومی' },
    { id: 176, origin: 'تهران', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 8, airline: 'ایران ایر', price: 2400000, flightNumber: 'IR-701', seatNumber: '22B', date: { year: 1403, month: 7, day: 2 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 177, origin: 'مشهد', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 6, airline: 'زاگرس', price: 2600000, flightNumber: 'IZ-302', seatNumber: '19A', date: { year: 1403, month: 7, day: 5 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 178, origin: 'اصفهان', destination: 'کیش', timeOfDay: 'روز', ticketsRemaining: 5, airline: 'کیش ایر', price: 2700000, flightNumber: 'K5-621', seatNumber: '11B', date: { year: 1403, month: 7, day: 7 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 179, origin: 'کیش', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 7, airline: 'آسمان', price: 2900000, flightNumber: 'EP-520', seatNumber: '15C', date: { year: 1403, month: 7, day: 10 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 180, origin: 'تهران', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 9, airline: 'کاسپین', price: 2300000, flightNumber: 'IV-203', seatNumber: '14A', date: { year: 1403, month: 7, day: 12 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 181, origin: 'شیراز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'ایران ایرتور', price: 2500000, flightNumber: 'IT-615', seatNumber: '18B', date: { year: 1403, month: 7, day: 14 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 182, origin: 'اصفهان', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 7, airline: 'ماهان ایر', price: 2800000, flightNumber: 'W5-422', seatNumber: '16C', date: { year: 1403, month: 7, day: 16 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 183, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 3, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-324', seatNumber: '12A', date: { year: 1403, month: 7, day: 18 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 184, origin: 'تهران', destination: 'تبریز', timeOfDay: 'روز', ticketsRemaining: 6, airline: 'آتا ایر', price: 2500000, flightNumber: 'I3-221', seatNumber: '10C', date: { year: 1403, month: 7, day: 20 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 185, origin: 'تبریز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 8, airline: 'کاسپین', price: 2300000, flightNumber: 'IV-104', seatNumber: '15B', date: { year: 1403, month: 7, day: 23 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 186, origin: 'اصفهان', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 5, airline: 'آسمان', price: 2600000, flightNumber: 'EP-608', seatNumber: '9A', date: { year: 1403, month: 8, day: 1 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 187, origin: 'شیراز', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 7, airline: 'ایران ایرتور', price: 2400000, flightNumber: 'IT-622', seatNumber: '13C', date: { year: 1403, month: 8, day: 4 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 188, origin: 'تهران', destination: 'کیش', timeOfDay: 'روز', ticketsRemaining: 9, airline: 'کیش ایر', price: 3100000, flightNumber: 'K5-530', seatNumber: '17B', date: { year: 1403, month: 8, day: 7 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 189, origin: 'کیش', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'زاگرس', price: 3200000, flightNumber: 'IZ-325', seatNumber: '20C', date: { year: 1403, month: 8, day: 10 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 190, origin: 'اصفهان', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 6, airline: 'ماهان ایر', price: 2500000, flightNumber: 'W5-430', seatNumber: '11A', date: { year: 1403, month: 8, day: 12 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 191, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'آسمان', price: 2700000, flightNumber: 'EP-627', seatNumber: '19B', date: { year: 1403, month: 8, day: 15 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 192, origin: 'تهران', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 3, airline: 'کاسپین', price: 2300000, flightNumber: 'IV-205', seatNumber: '16C', date: { year: 1403, month: 8, day: 18 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 193, origin: 'شیراز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 6, airline: 'ایران ایر', price: 2500000, flightNumber: 'IR-511', seatNumber: '12A', date: { year: 1403, month: 8, day: 21 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 194, origin: 'اصفهان', destination: 'تبریز', timeOfDay: 'روز', ticketsRemaining: 4, airline: 'ایران ایرتور', price: 2700000, flightNumber: 'IT-716', seatNumber: '18B', date: { year: 1403, month: 8, day: 24 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 195, origin: 'تبریز', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 7, airline: 'آتا ایر', price: 2900000, flightNumber: 'I3-329', seatNumber: '14C', date: { year: 1403, month: 8, day: 27 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 196, origin: 'تهران', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 8, airline: 'ماهان ایر', price: 2400000, flightNumber: 'W5-340', seatNumber: '11C', date: { year: 1403, month: 9, day: 2 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 197, origin: 'مشهد', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 6, airline: 'زاگرس', price: 2600000, flightNumber: 'IZ-310', seatNumber: '19A', date: { year: 1403, month: 9, day: 5 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 198, origin: 'اصفهان', destination: 'کیش', timeOfDay: 'روز', ticketsRemaining: 7, airline: 'کیش ایر', price: 2700000, flightNumber: 'K5-620', seatNumber: '11B', date: { year: 1403, month: 9, day: 8 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 199, origin: 'کیش', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'آسمان', price: 2900000, flightNumber: 'EP-521', seatNumber: '15C', date: { year: 1403, month: 9, day: 11 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 200, origin: 'تهران', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 9, airline: 'کاسپین', price: 2300000, flightNumber: 'IV-204', seatNumber: '14A', date: { year: 1403, month: 9, day: 14 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 201, origin: 'شیراز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'ایران ایرتور', price: 2500000, flightNumber: 'IT-520', seatNumber: '18C', date: { year: 1403, month: 9, day: 17 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 202, origin: 'اصفهان', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 6, airline: 'ماهان ایر', price: 2600000, flightNumber: 'W5-423', seatNumber: '15B', date: { year: 1403, month: 9, day: 19 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 203, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'زاگرس', price: 2800000, flightNumber: 'IZ-410', seatNumber: '13A', date: { year: 1403, month: 9, day: 21 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 204, origin: 'تهران', destination: 'تبریز', timeOfDay: 'روز', ticketsRemaining: 7, airline: 'کاسپین', price: 2400000, flightNumber: 'IV-208', seatNumber: '20C', date: { year: 1403, month: 9, day: 23 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 205, origin: 'تبریز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 8, airline: 'آتا ایر', price: 2600000, flightNumber: 'I3-415', seatNumber: '17B', date: { year: 1403, month: 9, day: 25 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 206, origin: 'اصفهان', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 3, airline: 'ایران ایر', price: 2500000, flightNumber: 'IR-712', seatNumber: '14C', date: { year: 1403, month: 9, day: 27 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 207, origin: 'شیراز', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'آسمان', price: 2400000, flightNumber: 'EP-621', seatNumber: '19A', date: { year: 1403, month: 9, day: 29 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 208, origin: 'تهران', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 6, airline: 'ماهان ایر', price: 2600000, flightNumber: 'W5-330', seatNumber: '10B', date: { year: 1403, month: 8, day: 2 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 209, origin: 'مشهد', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'زاگرس', price: 2700000, flightNumber: 'IZ-505', seatNumber: '16A', date: { year: 1403, month: 8, day: 5 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 210, origin: 'اصفهان', destination: 'کیش', timeOfDay: 'روز', ticketsRemaining: 7, airline: 'کیش ایر', price: 2500000, flightNumber: 'K5-712', seatNumber: '17C', date: { year: 1403, month: 8, day: 7 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 211, origin: 'کیش', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 3, airline: 'آسمان', price: 2800000, flightNumber: 'EP-510', seatNumber: '14B', date: { year: 1403, month: 8, day: 10 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 212, origin: 'تهران', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 5, airline: 'کاسپین', price: 2200000, flightNumber: 'IV-214', seatNumber: '12A', date: { year: 1403, month: 8, day: 12 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 213, origin: 'شیراز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'ایران ایر', price: 2500000, flightNumber: 'IR-618', seatNumber: '16C', date: { year: 1403, month: 8, day: 14 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 214, origin: 'اصفهان', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 7, airline: 'ماهان ایر', price: 2800000, flightNumber: 'W5-402', seatNumber: '18B', date: { year: 1403, month: 8, day: 17 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 215, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'آتا ایر', price: 2600000, flightNumber: 'I3-529', seatNumber: '15A', date: { year: 1403, month: 8, day: 20 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 216, origin: 'تهران', destination: 'تبریز', timeOfDay: 'روز', ticketsRemaining: 6, airline: 'کاسپین', price: 2400000, flightNumber: 'IV-104', seatNumber: '11B', date: { year: 1403, month: 8, day: 22 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 217, origin: 'تبریز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'زاگرس', price: 2600000, flightNumber: 'IZ-320', seatNumber: '19C', date: { year: 1403, month: 8, day: 25 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 218, origin: 'اصفهان', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 6, airline: 'آسمان', price: 2400000, flightNumber: 'EP-620', seatNumber: '13B', date: { year: 1403, month: 8, day: 27 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 219, origin: 'شیراز', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 3, airline: 'ایران ایرتور', price: 2700000, flightNumber: 'IT-505', seatNumber: '12A', date: { year: 1403, month: 8, day: 30 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 220, origin: 'تهران', destination: 'کیش', timeOfDay: 'روز', ticketsRemaining: 4, airline: 'کیش ایر', price: 3000000, flightNumber: 'K5-515', seatNumber: '20C', date: { year: 1403, month: 7, day: 1 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 221, origin: 'کیش', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'زاگرس', price: 3200000, flightNumber: 'IZ-320', seatNumber: '15A', date: { year: 1403, month: 7, day: 4 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 222, origin: 'اصفهان', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 7, airline: 'ماهان ایر', price: 2700000, flightNumber: 'W5-426', seatNumber: '19B', date: { year: 1403, month: 7, day: 7 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 223, origin: 'مشهد', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 6, airline: 'آتا ایر', price: 2800000, flightNumber: 'I3-312', seatNumber: '14C', date: { year: 1403, month: 7, day: 9 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 224, origin: 'تهران', destination: 'تبریز', timeOfDay: 'روز', ticketsRemaining: 3, airline: 'کاسپین', price: 2500000, flightNumber: 'IV-310', seatNumber: '18B', date: { year: 1403, month: 7, day: 11 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 225, origin: 'تبریز', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'ایران ایر', price: 2700000, flightNumber: 'IR-602', seatNumber: '17C', date: { year: 1403, month: 7, day: 14 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 226, origin: 'اصفهان', destination: 'شیراز', timeOfDay: 'روز', ticketsRemaining: 5, airline: 'آسمان', price: 2300000, flightNumber: 'EP-710', seatNumber: '14A', date: { year: 1403, month: 7, day: 17 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 227, origin: 'شیراز', destination: 'اصفهان', timeOfDay: 'شب', ticketsRemaining: 4, airline: 'ایران ایرتور', price: 2600000, flightNumber: 'IT-607', seatNumber: '18B', date: { year: 1403, month: 7, day: 20 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 228, origin: 'تهران', destination: 'مشهد', timeOfDay: 'روز', ticketsRemaining: 3, airline: 'زاگرس', price: 2400000, flightNumber: 'IZ-409', seatNumber: '15C', date: { year: 1403, month: 7, day: 22 }, ticketType: 'چارتر', class: 'اکونومی' },
    { id: 229, origin: 'مشهد', destination: 'تهران', timeOfDay: 'شب', ticketsRemaining: 5, airline: 'ماهان ایر', price: 2600000, flightNumber: 'W5-604', seatNumber: '11B', date: { year: 1403, month: 7, day: 25 }, ticketType: 'سیستمی', class: 'بیزینس' },
    { id: 230, origin: 'تهران', destination: 'کیش', timeOfDay: 'روز', ticketsRemaining: 7, airline: 'کیش ایر', price: 3000000, flightNumber: 'K5-417', seatNumber: '13A', date: { year: 1403, month: 7, day: 28 }, ticketType: 'چارتر', class: 'اکونومی' }
    
    
    ];
    
    
    
    let originform = localStorage.getItem('originform1');  
    let destinationform = localStorage.getItem('destinationform1'); 
    let dayformgo = localStorage.getItem('dayintgo');
    let monthform = localStorage.getItem('month');
    let goandback = localStorage.getItem('goandback');
    let holdertiket = document.getElementById('holdertiket')
    let holdertiketback = document.getElementById('holdertiketback')
    let daybackform = localStorage.getItem('dayintback');
    let monthformback = localStorage.getItem('monthforback');
    let searchhelpgoinput = document.getElementById('searchhelpgoinput')
    let searchhelpbackinput = document.getElementById('searchhelpbackinput')
    let searchhelpgoday = document.getElementById('searchhelpgoday')
    let searchhelpbackday = document.getElementById('searchhelpbackday')

    let airlinenameis = document.getElementById('airlinenameis')
    let airlinenameisinnet = airlinenameis.innerHTML
    let origindiv = document.getElementById('origindiv')
    let destinationdiv = document.getElementById('destinationdiv')
    let timetiketis = document.getElementById('timetiketis')
    let flightNumberLabel = document.getElementById('flightNumberLabel')
    let showinfodiv = document.getElementById('showinfodiv')
    let closeinfo = document.getElementById('closeinfo')
    let ticketsRemainingdiv = document.getElementById('ticketsRemainingdiv')
    
    let counttiket = 1


    let hiderdiv = document.getElementById('hiderdiv')
    let plusehandler = document.getElementById('plusehandler')
    let menhahandler = document.getElementById('menhahandler')
    let delethandler = document.getElementById('delethandler')
    let detaltiket = document.getElementById('detaltiket')
    let ordersdiv = document.querySelectorAll('.ordersdiv')
    let ordersarray = []
    let fristtimeis = 0
    let wehave

    let sidebar = document.getElementById('sidebar')
    let confermbut = document.getElementById('confermbut')
    let helperticket = document.getElementById('helperticket')
    let submithelperdiv = document.getElementById('submithelperdiv')
    let submithelper = document.getElementById('submithelper')
    
    function infohandler(ticketsRemainingdivinner){
        console.log(ticketsRemainingdivinner)
    }
    
    
    console.log(originform,typeof(originform))
    
    function sortorigin(originform){
        if(originform !== 'none'){
            flightsData = flightsData.filter(fly => fly.origin === originform)}
    }
        
    function setdestination(destinationform){
        if (destinationform !== 'none'){
            flightsData = flightsData.filter(fly => fly.destination === destinationform)
        }
    }
    
    function setday(dayformgo){
        if (dayformgo !== "none"){
            flightsData = flightsData.filter(fly => fly.date.day === +dayformgo)
        }
    }
    
    function setmonth(monthform){
        if (monthform !== "none"){
            flightsData = flightsData.filter(fly => fly.date.month === +monthform)
        }
    }
    function setiputs(originform,destinationform){
        searchhelpgoinput.value = originform
        searchhelpbackinput.value = destinationform
        searchhelpgoday.value = "1403/" + monthform + "/" + dayformgo
    
    }

    function takeorigin(origin, destination, airline, flightNumber, ticketsRemaining, price) {
        // تنظیم اطلاعات پرواز
        origindiv.innerText = origin;
        destinationdiv.innerText = destination;
        airlinenameis.innerText = airline;
        flightNumberLabel.innerText = flightNumber;
        ticketsRemainingdiv.innerHTML = ticketsRemaining;
        sumofcost.innerText = price * counttiket;
        sidebar.style.width = "40px"
        sidebar.style.height = "100px"
        helperticket.style.display = 'none'
        submithelperdiv.style.display = 'none'

    
        // اضافه کردن جزئیات بلیت
        let divtoapend = document.createElement('div');
        let divdetailti = `
        <div>${price}     بزرگسال</div>
        `;
        divtoapend.innerHTML = divdetailti;
        detaltiket.appendChild(divtoapend);

        let divtoapend2 = document.createElement('div');
        let divdetailti2 = `
        <div>${price}     بزرگسال</div>
        `;
        divtoapend2.classList.add("col-md-12", "text-center", "mt-1")
        divtoapend2.innerHTML = divdetailti2;
        helperticket.appendChild(divtoapend2);
    
        setTimeout(() => {
            showinfodiv.style.display = 'block';
            hiderdiv.style.display = 'block';
        }, 600);
    
        let maincount = counttiket;
        const maintiket = ticketsRemaining;
    
        // حذف رویدادهای قبلی (برای جلوگیری از چندین بار اجرا شدن)
        plusehandler.removeEventListener('click', handlePlusClick);
        menhahandler.removeEventListener('click', handleMinusClick);
        delethandler.removeEventListener('click', handleDeleteClick);
        closeinfo.removeEventListener('click', handleCloseClick);
    
        // تعریف توابع مدیریت کلیک
        function handlePlusClick() {
            if (+maintiket >= counttiket) {
                counttiket++;
                ticketsRemaining--;
                sumofcost.innerText = price * counttiket;
                ticketsRemainingdiv.innerHTML = ticketsRemaining;
    
                let divtoapend = document.createElement('div');
                let divdetailti = `
                <div>${price}     بزرگسال</div>
                `;
                divtoapend.innerHTML = divdetailti;
                detaltiket.appendChild(divtoapend);

                let divtoapend2 = document.createElement('div');
                let divdetailti2 = `
                <div>${price}     بزرگسال</div>
                `;
                divtoapend2.classList.add("col-md-12", "text-center", "mt-1")
                divtoapend2.innerHTML = divdetailti2;
                helperticket.appendChild(divtoapend2);

                
    
                console.log("cont:", counttiket, 'remin', ticketsRemaining, 'main', maincount, 'maintiket:', +maintiket, flightNumber);
            }
        }
    
        function handleMinusClick() {
            if (counttiket > 0) {
                counttiket--;
                ticketsRemaining++;
                sumofcost.innerText = price * counttiket;
                ticketsRemainingdiv.innerHTML = ticketsRemaining;
    
                detaltiket.removeChild(detaltiket.lastElementChild);
                helperticket.removeChild(helperticket.lastElementChild);
    
                console.log("cont:", counttiket, 'remin', ticketsRemaining, 'main', maincount, 'maintiket:', maintiket, flightNumber);
            }
        }
    
        function handleDeleteClick() {
            ticketsRemaining = +maintiket + 1;
            counttiket = 0;
    
            while (detaltiket.lastElementChild) {
                detaltiket.removeChild(detaltiket.lastElementChild);
            }
            while (helperticket.lastElementChild) {
                helperticket.removeChild(helperticket.lastElementChild);
            }
    
            ticketsRemainingdiv.innerHTML = ticketsRemaining;
            sumofcost.innerText = price * counttiket;
    
            console.log("cont:", counttiket, 'remin', ticketsRemaining, 'main', maincount, 'maintiket:', maintiket, flightNumber);
        }
    
        function handleCloseClick() {
            showinfodiv.style.display = 'none';
            hiderdiv.style.display = 'none';
        }

        function confermbuthandler(){
            
        }
    
        // اضافه کردن رویدادهای جدید
        plusehandler.addEventListener('click', handlePlusClick);
        menhahandler.addEventListener('click', handleMinusClick);
        delethandler.addEventListener('click', handleDeleteClick);
        closeinfo.addEventListener('click', handleCloseClick);
        confermbut.addEventListener('click',confermbuthandler)

        
    }
    

    
    
    
    
    
    if(goandback == "false"){
        function letssort(){
            sortorigin(originform)
            setdestination(destinationform)
            setmonth(monthform)
            setday(dayformgo)
            setiputs(originform,destinationform)
        }
        letssort()
    
    
        function createticket(){
            if (flightsData.length !== 0){
                flightsData.forEach(objticket =>{
                    let divholder = document.createElement('div')
                    let tiketsample = `
                    <div class="row maintiket mt-4">
                                    <div class="col-md-3  text-center labeltiket">
                                        <div class="row mt-2">
                                            <div class="col-md-12">
                                                <div id="nameairline">${objticket.airline}</div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-12">
                                                <img src="${"../img/emaratlogo.png"}" alt="" id="imgairline" class="imgairlinenew">
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-12">
                                                <div id="count">${objticket.ticketsRemaining}</div>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-12">
                                                <div id="pice" class="text-xlarge">${objticket.price}</div>
                                            </div>
                                        </div>
                                        <div class="row ">
                                            <div class="col-md-12">
                                                <div id="pice">تومان</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9 text-center labelmaintick">
                            <div class="row mt-3 text-center" style="display: flex; align-items: center; margin:0">
                                <div class="col-md-4">شماره پرواز</div>
                                <div class="col-md-4">تاریخ</div>
                                <div class="col-md-4">شماره صندلی</div>
                            </div>
                            <div class="row mt-3" style="display: flex; align-items: center; margin:0">
                                <div class="col-md-4">${objticket.flightNumber}</div>
                                <div class="col-md-4">${(objticket.date.year)} / ${(objticket.date.month)} / ${(objticket.date.day)} </div>
                                <div class="col-md-4">${objticket.seatNumber}</div>
                            </div>
                            <div class="row mt-4 text-center" style="margin:0">
                                <div class="col-md-5 text-xlarge">${objticket.origin}</div>
                                <div class="col-md-2"><i class="fa-solid fa-plane " style="margin: 0;font-size:30px"></i></div>
                                <div class="col-md-5 text-xlarge">${objticket.destination}</div>
                            </div>
                            <div class=" mt-4">
                                <div class="justifycenter mt-2 text-center">
                                <button class="btn btn-light btnsubmit getinfobut butis" onclick="takeorigin('${objticket.origin}', '${objticket.destination}', '${objticket.airline}' , '${objticket.flightNumber}' , '${objticket.ticketsRemaining}' , '${objticket.price}')">
                                    <p class="texthere" style="margin: 0;">خرید و اطلاعات بیشتر</p>
                                    <i class="fa-solid fa-plane p-0 iis" style="margin: 0;font-size:17px"></i>
                                </button>
                                </div>
                            </div>
                        </div>
                                </div>
                    `
                    divholder.innerHTML = tiketsample
                    holdertiket.appendChild(divholder)
                })
            } else {
                    let divholder = document.createElement('div')
                    let tiketsample = `
                    <div class="row maintiket mt-4" style="height: 300px;">
                    <div class="col-md-3  text-center labeltiket" style="height: 300px; display: flex; align-items: center; justify-content: center;">
                        
                    </div>
                    <div class="col-md-9 text-center labelmaintick" style="height: 300px; display: flex; align-items: center; justify-content: center;">
                    <div>
                        <i class="fa-solid fa-circle-exclamation" style ="display:block; font-size:40px"></i>
                        <div style ="display:block">بلیطی موجود نیست</div>
                    </div>
                    </div>
                </div>
                    `
                    divholder.innerHTML = tiketsample
                    holdertiket.appendChild(divholder)
            }
        }
        createticket()
    
    }else{
        holdertiketback.style = 'block'
        //الان حالتی هست که ما میدونیم کاربر رفت و برگشت رو استفاده میکنه. هیچ ربطی به حالت قبلی نداره.
        let mixarray = []
        let mixgo = []
        let mixback = []
        let reversorigin = destinationform
        let reversdestination = originform
        let backtiket = document.querySelectorAll('.backtiket')
        console.log('done')
        let secId = 1
        flightsData.forEach(fly =>{
            if(fly.origin == reversorigin && fly.destination == reversdestination){
                fly.state = 'readyforgo'
                fly.secIdis = secId 
                mixback.push(fly)
                secId++
    
            }
            if(fly.origin == originform && fly.destination == destinationform){
                fly.state = 'readyforback'
                fly.secIdis = secId
                mixgo.push(fly)
                secId++
    
            }
        })
        function createticketB(){
            console.log('mix:',mixarray,"mixgo:",mixgo,"mixback:",mixback)
            if(dayformgo !== "none"){
                mixgo = mixgo.filter(fly => fly.date.day == +dayformgo)
            }
            if (monthform !== "none"){
                mixgo = mixgo.filter(fly => fly.date.month == +monthform)
            }
            if(daybackform !== "none"){
                mixback = mixback.filter(fly => fly.date.day == +daybackform)
            }
            if (monthform !== "none"){
                mixback = mixback.filter(fly => fly.date.month == +monthformback)
            }
            console.log('mix:',mixarray,"mixgo:",mixgo,"mixback:",mixback)
    
    
            
            mixgo.forEach(fly =>{
                if(mixgo.length !== 0){
                    let divholder = document.createElement('div')
                    let dayflygo = fly.date.day
                    let monthflygo = fly.date.month
                    console.log(dayflygo,monthflygo)
                    let tiketsamplegoback = `
                    <div class="row maintiket mt-4">
                                    <div class="col-md-3  text-center labeltiket">
                                        <div class="row mt-2">
                                            <div class="col-md-12">
                                                <div id="nameairline">${fly.airline}</div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-12">
                                                <img src="${"../img/emaratlogo.png"}" alt="" id="imgairline" class="imgairlinenew">
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-12">
                                                <div id="count">${fly.ticketsRemaining}</div>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-12">
                                                <div id="pice">قیمت</div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-12">
                                                <div id="pice">${fly.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9 text-center labelmaintick">
                            <div class="row mt-3 text-center" style="display: flex; align-items: center; margin:0">
                                <div class="col-md-4">شماره پرواز</div>
                                <div class="col-md-4">تاریخ</div>
                                <div class="col-md-4">شماره صندلی</div>
                            </div>
                            <div class="row mt-3" style="display: flex; align-items: center; margin:0">
                                <div class="col-md-4">${fly.flightNumber}</div>
                                <div class="col-md-4">${(fly.date.year)} / ${(fly.date.month)} / ${(fly.date.day)} </div>
                                <div class="col-md-4">${fly.seatNumber}</div>
                            </div>
                            <div class="row mt-4 text-center" style="margin:0">
                                <div class="col-md-5 text-xlarge">${fly.origin}</div>
                                <div class="col-md-2"><i class="fa-solid fa-plane " style="margin: 0;font-size:30px"></i></div>
                                <div class="col-md-5 text-xlarge">${fly.destination}</div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-12 mr-4 text-center"><button class="btn btn-primary" style="width:130px">خرید بیلیت</button></div>
                            </div>
                        </div>
                                </div>
                    `
                    divholder.innerHTML = tiketsamplegoback
                    holdertiket.appendChild(divholder)
                    backtiket = document.querySelector('.backtiket')
                }else{
                    console.log("پزواز یافت نشد")
                }
            })
            mixback.forEach(fly =>{
                console.log(backtiket)
                if(mixback.length !==0){
                    let divholderb = document.createElement('div')
                    let tiketsamplegobackb = `
                    <div class="row maintiket mt-4">
                                    <div class="col-md-3  text-center labeltiket">
                                        <div class="row mt-2">
                                            <div class="col-md-12">
                                                <div id="nameairline">${fly.airline}</div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-12">
                                                <img src="${"../img/emaratlogo.png"}" alt="" id="imgairline" class="imgairlinenew">
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-12">
                                                <div id="count">${fly.ticketsRemaining}</div>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-12">
                                                <div id="pice">قیمت</div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-12">
                                                <div id="pice">${fly.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9 text-center labelmaintick">
                            <div class="row mt-3 text-center" style="display: flex; align-items: center; margin:0">
                                <div class="col-md-4">شماره پرواز</div>
                                <div class="col-md-4">تاریخ</div>
                                <div class="col-md-4">شماره صندلی</div>
                            </div>
                            <div class="row mt-3" style="display: flex; align-items: center; margin:0">
                                <div class="col-md-4">${fly.flightNumber}</div>
                                <div class="col-md-4">${(fly.date.year)} / ${(fly.date.month)} / ${(fly.date.day)} </div>
                                <div class="col-md-4">${fly.seatNumber}</div>
                            </div>
                            <div class="row mt-4 text-center" style="margin:0">
                                <div class="col-md-5 text-xlarge">${fly.origin}</div>
                                <div class="col-md-2"><i class="fa-solid fa-plane " style="margin: 0;font-size:30px"></i></div>
                                <div class="col-md-5 text-xlarge">${fly.destination}</div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-12 mr-4 text-center"><button class="btn btn-primary" style="width:130px" id="i${fly.id}">خرید بیلیت</button></div>
                            </div>
                        </div>
                                </div>
                    `
                    divholderb.innerHTML = tiketsamplegobackb
                    holdertiketback.appendChild(divholderb)
    
                }
            })
            
        }
        createticketB()
    } 
    
    


let getinfobut = document.querySelectorAll(".getinfobut")
let idfly
let idbut
let selectedidfly = []
let selectedidbut = []
let ico = 0
flightsData.forEach((fly,index) =>{
    idfly = fly.id
    console.log(fly)
    selectedidfly.push([fly,index])
})
getinfobut.forEach((but,index) =>{
    selectedidbut.push([but,index])
    but.addEventListener('click',function(){
        console.log(selectedidfly[ico][0].id,selectedidbut[ico][0])
        ico++
    })
})

console.log("fly:",selectedidfly , "but:",selectedidbut)


let butis = document.querySelectorAll('.butis');

butis.forEach(but => {
    but.addEventListener('click', function() {
        // انتخاب عناصر آیکون و متن برای انیمیشن
        let iis = this.querySelector('.iis');
        let texthere = this.querySelector('.texthere');


        gsap.to(iis, {
            x: 50,
            duration: 1,
            yoyo: true,
            repeat: 1,
            ease: "power4.out",
            
        });
    });
});


sidebar.addEventListener('click',function(){
    if(sidebar.style.width !== "200px"){
        sidebar.style.width = "200px"
        sidebar.style.height = "300px"
        helperticket.style.display = 'block'
        submithelperdiv.style.display = 'block'
    }else{
        sidebar.style.width = "40px"
        sidebar.style.height = "100px"
        helperticket.style.display = 'none'
        submithelperdiv.style.display = 'none'
    }

})

let count111 = document.getElementById('count')
let ticketsRemainingdivinner = count111.innerHTML