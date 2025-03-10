# Release Notes - ระบบลางาน (Leave System)

## สรุปข้อผิดพลาดและปัญหาที่พบในเวอร์ชันนี้

### 1. หน้าจอไม่ครบตามที่ระบุในเอกสาร
- ตามที่ได้ระบุในเอกสารการออกแบบ (Word document) หน้า **ปฏิทินลางาน** ยังไม่ได้รับการพัฒนาเสร็จสมบูรณ์
- หน้า **ปฏิทินลางาน** เป็นฟีเจอร์ที่สำคัญสำหรับการแสดงวันลาของพนักงานในแต่ละเดือน แต่ไม่ได้ถูกพัฒนาในเวอร์ชันนี้ ซึ่งทำให้หน้าจอที่ออกแบบไว้ไม่ครบถ้วนตามที่คาดหวัง

### 2. ปัญหาการเชื่อมต่อกับ Backend
- ในการเชื่อมต่อ **Frontend** กับ **Backend** พบปัญหาที่ทำให้การเชื่อมต่อกับบางหน้าทำงานไม่ถูกต้อง
- **หน้าที่เชื่อมต่อได้สำเร็จ** คือ:
  - หน้า **ขอลางาน**: แต่ไม่สามารถส่งข้อมูลการขอลางานได้
  - หน้า **อนุมัติการลา**: ผู้จัดการไม่สามารถอนุมัติคำขอลาได้
  เนื่องจากปัญหา ด้านการส่งข้อมูลบางอย่าง
- **หน้าที่เชื่อมต่อไม่ได้**:
  - หน้าต่างๆ เช่น หน้า **ประวัติการลา** และ **หน้าแดชบอร์ด** ยังไม่สามารถเชื่อมต่อกับ Backend ได้

### 3. ปัญหาการส่งและดึงข้อมูลระหว่าง Frontend และ Backend
- การเชื่อมต่อระหว่าง **Frontend** และ **Backend** มีปัญหาหลักๆ ในการส่งและดึงข้อมูล
  - ไม่สามารถใช้ **HttpClient** ใน Angular เพื่อเชื่อมต่อกับ API ของ Backend ได้
  - การพยายามใช้ **fetch** ก็ไม่สามารถทำงานได้
  - การใช้ **axios** ก็ไม่ได้ผลเช่นกัน
- **Database** สามารถรับข้อมูลจาก **Backend** และบันทึกข้อมูลลง **PostgreSQL Database** ได้ปกติ แต่ข้อมูลไม่สามารถส่งกลับมายัง **Frontend** ได้ตามที่คาดหวัง
- ปัญหานี้อาจเกิดจากการตั้งค่า **CORS** หรือการกำหนดการตอบสนอง HTTP ไม่ถูกต้องที่ Backend ทำให้ข้อมูลไม่สามารถถูกดึงกลับมาที่ **Frontend** ได้

### 4. การแก้ไขปัญหา
- คาดว่า **CORS issue** อาจเป็นสาเหตุหลักที่ทำให้การเชื่อมต่อระหว่าง **Frontend** และ **Backend** ไม่สมบูรณ์ การตั้งค่า **CORS** ใน **Spring Boot** ควรได้รับการทบทวนเพื่ออนุญาตให้การเชื่อมต่อจากต้นทางที่ถูกต้อง
- ในอนาคต ควรตรวจสอบการตั้งค่า **HTTP Headers** และ **API Endpoint** ให้มั่นใจว่า **Frontend** สามารถทำการเรียกใช้งาน API ได้อย่างถูกต้อง

## สิ่งที่ต้องทำในเวอร์ชันถัดไป
- พัฒนา **หน้าปฏิทินลางาน** ให้เสร็จสมบูรณ์เพื่อให้ครบตามเอกสารการออกแบบ
- แก้ไขปัญหาการเชื่อมต่อระหว่าง **Frontend** และ **Backend** โดยตรวจสอบการตั้งค่า **CORS** และ **API Endpoint** ให้สมบูรณ์
- ทดสอบการส่งข้อมูลและดึงข้อมูลระหว่าง **Frontend** และ **Backend** เพื่อให้แน่ใจว่าทุกหน้าที่ต้องการเชื่อมต่อทำงานได้ตามปกติ
- ควรพิจารณาใช้เครื่องมือหรือวิธีการอื่นๆ ในการเชื่อมต่อข้อมูลระหว่าง **Frontend** และ **Backend** เช่น การใช้ **WebSocket** สำหรับการเชื่อมต่อที่มีความทันสมัยและมีประสิทธิภาพมากขึ้น
- ควาดว่าจะใช้เวลาเพิ่มอีก 5-7วัน อาจจะเสร็จครับ

## ขอบคุณ
ขอขอบคุณทีมพัฒนา(ผมเอง) หากพบปัญหาหรือต้องการให้ช่วยเหลือเพิ่มเติมสามารถติดต่อเราได้ตลอดเวลา
