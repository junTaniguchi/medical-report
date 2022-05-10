// import { type } from "os";

// MedicalReportType.tsx
export type MedicalReportType = {
    date: Date | null;             // 日付
    thermometer: number;    // 体温
    heartRate: number;     // 脈拍
    breathingRate: number; // 呼吸数
    oxygenRate: number;    // 血中酸素飽和度
    minPressure: number;   // 最低血圧
    maxPressure: number;   // 最高血圧
    calorie: number;        // 摂取カロリー
    weight: number;         // 体重
    memo: string;           // 備考 
    // 
    // 
  }