




import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import "./Registrationsuccess.css";

const RegistrationSuccess1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};

  // ✅ Use backend-generated ID instead of random one
  const registrationId = data.registrationId || data.stallId || "—";

  // 🧾 Generate & Download PDF
  const handleDownload = () => {
    const doc = new jsPDF();

    // 🔹 Page border
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.rect(10, 10, 190, 270);

    // 🔹 Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Vishwasri Technologies", 105, 25, { align: "center" });

    doc.setFontSize(14);
    doc.text("SparkFest 2025", 105, 35, { align: "center" });

    // 🔹 Optional logo (uncomment if you have one)
    // const img = new Image();
    // img.src = "/Images/logo.png";
    // doc.addImage(img, "PNG", 15, 15, 20, 20);

    // 🔹 Line below header
    doc.setLineWidth(0.3);
    doc.line(20, 40, 190, 40);

    // 🔹 Details box
    doc.setDrawColor(150);
    doc.rect(20, 50, 170, 80);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    let y = 60;

    const details = [
      ["Registration ID:", registrationId],
      ["Participant Name:", data.name || "—"],
      ["Event Name:", "SparkFest 2025"],
      ["Category:", data.category || "Competition"],
      ["Competition:", data.competition || "—"],
      ["Fee Paid:", `INR ${data.fee || "—"}`],
    ];

    details.forEach(([label, value]) => {
      doc.text(label, 30, y);
      doc.text(value, 100, y);
      y += 12;
    });

    // 🔹 Footer note
    doc.setFont("helvetica", "italic");
    doc.text("Thank you for your participation!", 105, y + 20, { align: "center" });
    doc.text("— Vishwasri Technologies —", 105, y + 30, { align: "center" });

    // 🔹 Save PDF
    doc.save(`Registration_Receipt_${registrationId}.pdf`);
  };

  return (
    <div className="success-container">
      <div className="success-card">
        <button className="close-btn" onClick={() => navigate("/")}>✕</button>
        <h2 className="success-title">Registration Successful</h2>

        <p className="success-message">
          Thank you, {data.name || "Participant"}! Your registration is confirmed.
        </p>

        <div className="details">
          <strong>Registration ID:</strong> <span>{registrationId}</span>
          <strong>Event Name:</strong> <span>SparkFest 2025</span>
          <strong>Category:</strong> <span>{data.category || "Competition"}</span>
          <strong>Competition:</strong> <span>{data.competition || "—"}</span>
          <strong>Fee Paid:</strong> <span>₹{data.fee || "—"}</span>
          {/* <strong>Email:</strong> <span>{data.email || "—"}</span>
          <strong>Mobile:</strong> <span>{data.mobile || "—"}</span> */}
          <button className="download-btn" onClick={handleDownload}>
          📄 Download Receipt
        </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess1;
