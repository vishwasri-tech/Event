import React, {useRef} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./SuccessPage.css";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ticketData = location.state || {}; // ✅ Get dynamic data from PaymentPage

  const ticketId = ticketData.ticketId; // ✅ actual backend ticket ID

  // ✅ Ref to ticket div
  const ticketRef = useRef();

  // ✅ Function to download ticket as PDF
  const handleDownload = async () => {
    const element = ticketRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${ticketId}.pdf`);
  };

  return (
    <div className="success-container1">
      <button className="close-btn" onClick={() => navigate("/")}>✖</button>

      <h2>Ticket Purchase Successful</h2>
      <p>Thank you! Your ticket purchase is confirmed.</p>

      {ticketData.type && ticketData.amount ? (
        <>
        <div className="ticket-details1" ref={ticketRef} style={{ padding: "20px", background: "#fff" }}>
          <p><strong>Ticket ID:</strong> {ticketId}</p>
          <p><strong>Event Name:</strong> SparkFest 2025</p>
          <p><strong>Type:</strong> {ticketData.type}</p>
          <p><strong>Price:</strong> ₹{ticketData.amount}</p>
          <p><strong>Venue:</strong> University Post Graduate College  - Secunderabad</p>

        </div>
        <button className="download-btn" onClick={handleDownload} style={{ marginTop: "20px" }}>
            Download Ticket
          </button>
          </>
      ) : (
        <p>No ticket details found. Please go back and purchase a ticket.</p>
      )}
    </div>
  );
};

export default SuccessPage;
