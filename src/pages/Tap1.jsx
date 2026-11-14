import React, { useState } from 'react';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  arrowForwardOutline,
  calendarOutline,
  carSportOutline,
  checkmarkCircleOutline,
  locationOutline,
  peopleOutline,
  removeOutline,
  addOutline,
  shieldCheckmarkOutline,
  swapVerticalOutline,
  timeOutline,
} from 'ionicons/icons';
import './Tap1.css';

const BOOKING_STORAGE_KEY = 'smart-ride-booking';

const vehicles = [
  {
    id: 'sedan',
    name: 'รถเก๋ง',
    description: '1–3 ที่นั่ง',
    capacity: 3,
    price: 450,
    icon: carSportOutline,
  },
  {
    id: 'suv',
    name: 'รถ SUV',
    description: '1–5 ที่นั่ง',
    capacity: 5,
    price: 650,
    icon: carSportOutline,
  },
  {
    id: 'van',
    name: 'รถตู้',
    description: '1–9 ที่นั่ง',
    capacity: 9,
    price: 950,
    icon: carSportOutline,
  },
];

const getToday = () => {
  const date = new Date();
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
};

const Tab1 = () => {
  const [origin, setOrigin] = useState('สนามบินสุวรรณภูมิ');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState(getToday);
  const [departureTime, setDepartureTime] = useState('09:00');
  const [passengers, setPassengers] = useState(1);
  const [vehicleId, setVehicleId] = useState('sedan');
  const [booking, setBooking] = useState(null);
  const selectedVehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);

  const handleSwapLocations = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleBooking = (event) => {
    event.preventDefault();
    const newBooking = {
      id: Date.now(),
      origin,
      destination,
      departureDate,
      departureTime,
      passengers,
      vehicle: selectedVehicle.name,
      price: selectedVehicle.price,
    };

    localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(newBooking));
    setBooking(newBooking);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ride-toolbar">
          <div className="ride-brand">
            <div className="ride-brand-icon">
              <IonIcon icon={carSportOutline} />
            </div>
            <IonTitle>Smart Ride</IonTitle>
          </div>
          <IonBadge slot="end" className="availability-badge">
            พร้อมให้บริการ
          </IonBadge>
        </IonToolbar>
      </IonHeader>

      <IonContent className="booking-content">
        <div className="booking-container">
          <section className="ride-hero">
            <div className="hero-copy">
              <span className="hero-eyebrow">YOUR RIDE, YOUR WAY</span>
              <h1>เดินทางสบาย<br />ไปได้ทุกที่</h1>
              <p>จองรถล่วงหน้า ให้ทุกการเดินทางเป็นเรื่องง่าย</p>
            </div>
            <div className="hero-car-art" aria-hidden="true">
              <div className="hero-orbit" />
              <IonIcon icon={carSportOutline} />
            </div>
            <div className="hero-points">
              <span><IonIcon icon={shieldCheckmarkOutline} /> ปลอดภัยทุกเที่ยว</span>
              <span><IonIcon icon={timeOutline} /> ตรงเวลา</span>
            </div>
          </section>

          <div className="booking-section-heading">
            <div>
              <span className="section-kicker">PLAN YOUR TRIP</span>
              <h2>จองรถของคุณ</h2>
            </div>
            <span className="step-indicator">01 <span>/ 01</span></span>
          </div>

          <IonCard className="booking-card">
            <IonCardContent>
              <form onSubmit={handleBooking}>
                <div className="route-fields">
                  <label className="booking-field">
                    <span className="field-label">จุดรับ</span>
                    <span className="input-with-icon">
                      <IonIcon icon={locationOutline} className="pickup-icon" />
                      <input
                        aria-label="จุดรับ"
                        required
                        value={origin}
                        onChange={(event) => setOrigin(event.target.value)}
                        placeholder="ระบุจุดรับของคุณ"
                      />
                    </span>
                  </label>

                  <button
                    className="swap-locations-button"
                    type="button"
                    aria-label="สลับจุดรับและจุดส่ง"
                    onClick={handleSwapLocations}
                  >
                    <IonIcon icon={swapVerticalOutline} />
                  </button>

                  <label className="booking-field">
                    <span className="field-label">จุดส่ง</span>
                    <span className="input-with-icon">
                      <IonIcon icon={locationOutline} className="dropoff-icon" />
                      <input
                        aria-label="จุดส่ง"
                        required
                        value={destination}
                        onChange={(event) => setDestination(event.target.value)}
                        placeholder="คุณจะไปที่ไหน?"
                      />
                    </span>
                  </label>
                </div>

                <div className="trip-details">
                  <label className="booking-field detail-field">
                    <span className="field-label">วันที่เดินทาง</span>
                    <span className="input-with-icon">
                      <IonIcon icon={calendarOutline} />
                      <input
                        aria-label="วันที่เดินทาง"
                        type="date"
                        min={getToday()}
                        required
                        value={departureDate}
                        onChange={(event) => setDepartureDate(event.target.value)}
                      />
                    </span>
                  </label>
                  <label className="booking-field detail-field">
                    <span className="field-label">เวลา</span>
                    <span className="input-with-icon">
                      <IonIcon icon={timeOutline} />
                      <input
                        aria-label="เวลา"
                        type="time"
                        required
                        value={departureTime}
                        onChange={(event) => setDepartureTime(event.target.value)}
                      />
                    </span>
                  </label>
                  <div className="booking-field detail-field passenger-field">
                    <span className="field-label">ผู้โดยสาร</span>
                    <div className="passenger-stepper">
                      <IonIcon icon={peopleOutline} />
                      <button
                        type="button"
                        aria-label="ลดจำนวนผู้โดยสาร"
                        onClick={() => setPassengers((count) => Math.max(1, count - 1))}
                        disabled={passengers <= 1}
                      >
                        <IonIcon icon={removeOutline} />
                      </button>
                      <strong>{passengers}</strong>
                      <button
                        type="button"
                        aria-label="เพิ่มจำนวนผู้โดยสาร"
                        onClick={() => setPassengers((count) => Math.min(selectedVehicle.capacity, count + 1))}
                        disabled={passengers >= selectedVehicle.capacity}
                      >
                        <IonIcon icon={addOutline} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="vehicle-heading">
                  <div>
                    <h3>เลือกรถที่ใช่</h3>
                    <p>ราคาเริ่มต้นต่อเที่ยว</p>
                  </div>
                </div>
                <div className="vehicle-options">
                  {vehicles.map((vehicle) => (
                    <button
                      className={`vehicle-option ${vehicleId === vehicle.id ? 'selected' : ''}`}
                      key={vehicle.id}
                      type="button"
                      aria-pressed={vehicleId === vehicle.id}
                      onClick={() => {
                        setVehicleId(vehicle.id);
                        setPassengers((count) => Math.min(vehicle.capacity, count));
                      }}
                    >
                      <IonIcon icon={vehicle.icon} />
                      <strong>{vehicle.name}</strong>
                      <span>{vehicle.description}</span>
                      <b>฿{vehicle.price}</b>
                    </button>
                  ))}
                </div>

                <div className="booking-total">
                  <div>
                    <span>ราคาโดยประมาณ</span>
                    <strong>฿{selectedVehicle.price}</strong>
                  </div>
                  <IonButton type="submit" className="book-ride-button">
                    จองรถเลย
                    <IonIcon slot="end" icon={arrowForwardOutline} />
                  </IonButton>
                </div>
                <p className="booking-footnote">
                  <IonIcon icon={shieldCheckmarkOutline} />
                  ยืนยันการจองได้โดยไม่มีค่าใช้จ่ายล่วงหน้า
                </p>
              </form>
            </IonCardContent>
          </IonCard>

          {booking && (
            <section className="booking-confirmation" role="status">
              <IonIcon icon={checkmarkCircleOutline} />
              <div>
                <strong>บันทึกการจองแล้ว</strong>
                <p>ดูรายละเอียดการเดินทางได้ที่แท็บ “การจองของฉัน”</p>
              </div>
            </section>
          )}

          <section className="ride-promise">
            <div className="promise-icon"><IonIcon icon={shieldCheckmarkOutline} /></div>
            <div>
              <strong>เดินทางอย่างมั่นใจ</strong>
              <p>คนขับมืออาชีพ รถสะอาด พร้อมดูแลคุณตลอดเส้นทาง</p>
            </div>
            <IonIcon className="promise-arrow" icon={arrowForwardOutline} />
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
