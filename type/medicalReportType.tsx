// import { type } from "os";

// MedicalReportType.tsx
export type MedicalReportType = {
    date: Date | null;             // 日付
    thermometer: number;    // 体温
    weight: number;         // 体重
    calorie: number;        // 摂取カロリー
    heartRate: number;     // 脈拍
    breathingRate: number; // 呼吸数
    oxygenRate: number;    // 血中酸素飽和度
    minPressure: number;   // 最低血圧
    maxPressure: number;   // 最高血圧
    memo: string;           // 備考 
    // 
    // 
  }