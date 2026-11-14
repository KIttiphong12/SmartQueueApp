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
  useIonViewWillEnter,
} from '@ionic/react';
import {
  calendarOutline,
  carSportOutline,
  checkmarkCircleOutline,
  closeCircleOutline,
  locationOutline,
  peopleOutline,
  timeOutline,
} from 'ionicons/icons';
import './Tap2.css';

const BOOKING_STORAGE_KEY = 'smart-ride-booking';

const getSavedBooking = () => {
  const savedBooking = localStorage.getItem(BOOKING_STORAGE_KEY);
  return savedBooking ? JSON.parse(savedBooking) : null;
};

const formatDate = (date) => (
  new Date(`${date}T00:00:00`).toLocaleDateString('th-TH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
);

const Tab2 = () => {
  const [booking, setBooking] = useState(getSavedBooking);

  useIonViewWillEnter(() => {
    setBooking(getSavedBooking());
  });

  const handleCancelBooking = () => {
    const confirmed = window.confirm('คุณต้องการยกเลิกการจองนี้หรือไม่?');
    if (confirmed) {
      localStorage.removeItem(BOOKING_STORAGE_KEY);
      setBooking(null);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="my-bookings-toolbar">
          <IonTitle>การจองของฉัน</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="my-bookings-content">
        <div className="my-bookings-container">
          <div className="bookings-welcome">
            <span className="bookings-kicker">YOUR TRIPS</span>
            <h1>การเดินทางของคุณ</h1>
            <p>จัดการและตรวจสอบรายละเอียดการจองได้ที่นี่</p>
          </div>

          {booking ? (
            <IonCard className="saved-booking-card">
              <div className="saved-booking-banner">
                <div className="saved-booking-car"><IonIcon icon={carSportOutline} /></div>
                <div className="saved-booking-title">
                  <span>SMART RIDE · BOOKING</span>
                  <h2>{booking.vehicle}</h2>
                </div>
                <IonBadge>บันทึกแล้ว</IonBadge>
              </div>
              <IonCardContent>
                <div className="booking-reference">
                  <span>หมายเลขการจอง</span>
                  <strong>SR-{String(booking.id).slice(-6)}</strong>
                </div>

                <div className="saved-route">
                  <div className="route-indicator">
                    <span className="route-dot pickup-dot" />
                    <span className="route-line" />
                    <span className="route-dot dropoff-dot" />
                  </div>
                  <div className="route-stops">
                    <div>
                      <span>จุดรับ</span>
                      <strong>{booking.origin}</strong>
                    </div>
                    <div>
                      <span>จุดส่ง</span>
                      <strong>{booking.destination}</strong>
                    </div>
                  </div>
                </div>

                <div className="saved-booking-details">
                  <div className="saved-detail">
                    <IonIcon icon={calendarOutline} />
                    <span><small>วันที่เดินทาง</small><strong>{formatDate(booking.departureDate)}</strong></span>
                  </div>
                  <div className="saved-detail">
                    <IonIcon icon={timeOutline} />
                    <span><small>เวลา</small><strong>{booking.departureTime} น.</strong></span>
                  </div>
                  <div className="saved-detail">
                    <IonIcon icon={peopleOutline} />
                    <span><small>ผู้โดยสาร</small><strong>{booking.passengers} คน</strong></span>
                  </div>
                  <div className="saved-detail">
                    <IonIcon icon={carSportOutline} />
                    <span><small>ประเภทรถ</small><strong>{booking.vehicle}</strong></span>
                  </div>
                </div>

                <div className="saved-booking-total">
                  <span>ราคาโดยประมาณ</span>
                  <strong>฿{booking.price}</strong>
                </div>

                <div className="booking-status-note">
                  <IonIcon icon={checkmarkCircleOutline} />
                  <span>บันทึกการจองเรียบร้อยแล้ว เตรียมตัวให้พร้อมสำหรับการเดินทาง</span>
                </div>

                <IonButton
                  expand="block"
                  fill="outline"
                  className="cancel-booking-button"
                  onClick={handleCancelBooking}
                >
                  <IonIcon slot="start" icon={closeCircleOutline} />
                  ยกเลิกการจอง
                </IonButton>
              </IonCardContent>
            </IonCard>
          ) : (
            <IonCard className="empty-bookings-card">
              <IonCardContent>
                <div className="empty-bookings-art"><IonIcon icon={carSportOutline} /></div>
                <h2>ยังไม่มีรายการจอง</h2>
                <p>เริ่มวางแผนการเดินทางครั้งถัดไป แล้วเราจะพาคุณไปถึงที่หมาย</p>
                <div className="empty-booking-hint">
                  <IonIcon icon={locationOutline} />
                  <span>เลือกจุดรับ จุดส่ง และรถที่เหมาะกับคุณ</span>
                </div>
              </IonCardContent>
            </IonCard>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
