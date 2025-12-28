import { useState } from "react";
import "../styles/bloodPressure.css";

export default function BloodPressureCalculator() {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const sys = Number(systolic);
    const dia = Number(diastolic);

    if (!sys || !dia) {
      setResult("Masukkan nilai sistolik dan diastolik yang valid.");
      return;
    }

    let category = "";

    if (sys < 120 && dia < 80) {
      category = "Normal";
    } else if (sys >= 120 && sys <= 139 || dia >= 80 && dia <= 89) {
      category = "Prahipertensi";
    } else if (sys >= 140 && sys <= 159 || dia >= 90 && dia <= 99) {
      category = "Hipertensi Tingkat 1";
    } else if (sys >= 160 || dia >= 100) {
      category = "Hipertensi Tingkat 2";
    }

    setResult(category);
  };

  return (
    <div className="bp-calculator reveal">
      <h2>Kalkulator Tekanan Darah</h2>
      <p className="bp-desc">
        Masukkan hasil pengukuran tekanan darah Anda untuk mengetahui
        kategorinya.
      </p>

      <div className="bp-form">
        <div className="bp-input">
          <label>Sistolik (mmHg)</label>
          <input
            type="number"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
            placeholder="Contoh: 120"
          />
        </div>

        <div className="bp-input">
          <label>Diastolik (mmHg)</label>
          <input
            type="number"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            placeholder="Contoh: 80"
          />
        </div>
      </div>

      <button className="bp-button" onClick={calculate}>
        Cek Kategori
      </button>

      {result && (
        <div className="bp-result">
          <strong>Hasil:</strong> {result}
        </div>
      )}

      <p className="bp-note">
        *Hasil ini bersifat edukatif dan tidak menggantikan konsultasi medis.
      </p>
    </div>
  );
}
