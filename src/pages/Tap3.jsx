import React from 'react';
import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { carSportOutline, createOutline, locationOutline, logOutOutline, mailOutline, personCircleOutline, phonePortraitOutline } from 'ionicons/icons';
import './Tap3.css';

const Tap3 = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar className="profile-toolbar"><IonTitle>โปรไฟล์ของฉัน</IonTitle></IonToolbar>
    </IonHeader>
    <IonContent fullscreen className="profile-content">
      <div className="profile-container">
        <section className="profile-hero">
          <div className="profile-avatar"><IonIcon icon={personCircleOutline} /></div>
          <div><p className="profile-greeting">ยินดีต้อนรับกลับมา</p><h1>กิตติพงษ์ คนโก้</h1><span className="member-badge">สมาชิก Smart Ride</span></div>
          <IonButton fill="clear" className="edit-profile-button" aria-label="แก้ไขโปรไฟล์"><IonIcon slot="icon-only" icon={createOutline} /></IonButton>
        </section>
        <IonCard className="profile-card">
          <IonCardContent>
            <div className="card-heading"><div className="heading-icon"><IonIcon icon={personCircleOutline} /></div><div><h2>ข้อมูลส่วนตัว</h2><p>ข้อมูลสำหรับการติดต่อ</p></div></div>
            <div className="contact-list">
              <div className="contact-item"><IonIcon icon={phonePortraitOutline} /><span><small>เบอร์โทรศัพท์</small><strong>08X-XXX-XXXX</strong></span></div>
              <div className="contact-item"><IonIcon icon={mailOutline} /><span><small>อีเมล</small><strong>somchai@example.com</strong></span></div>
              <div className="contact-item"><IonIcon icon={locationOutline} /><span><small>จุดรับรถประจำ</small><strong>สถานีขนส่งกลาง</strong></span></div>
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard className="profile-card">
          <IonCardContent>
            <div className="card-heading"><div className="heading-icon"><IonIcon icon={carSportOutline} /></div><div><h2>รถที่ใช้ประจำ</h2><p>ข้อมูลรถสำหรับการจอง</p></div></div>
            <div className="vehicle-info"><div className="vehicle-illustration"><IonIcon icon={carSportOutline} /></div><div><strong>Toyota Commuter</strong><span>ทะเบียน กข 1234 กรุงเทพมหานคร</span></div></div>
          </IonCardContent>
        </IonCard>
        <IonButton expand="block" fill="outline" className="logout-button"><IonIcon slot="start" icon={logOutOutline} />ออกจากระบบ</IonButton>
      </div>
    </IonContent>
  </IonPage>
);

export default Tap3;
