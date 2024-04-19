import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TeacherSidebar from './Theader';

// Styled Components
const MonitoringPageContainer = styled.div`
  padding: 20px;
  margin:20px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const NotificationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NotificationItem = styled.li`
  background-color: #f0f8ff;
  border-left: 4px solid #ffa500;
  padding: 15px;
  margin-bottom: 10px;
  transition: transform 0.2s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transform: translateX(5px);
  }
`;

const DismissButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffa500;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff7f00;
  }
`;

const ProgressReportTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const ProgressReportHeader = styled.th`
  border: 1px solid #ddd;
  padding: 15px;
  background-color: #f0f8ff;
  color: #333;
  text-align: left;
`;

const ProgressReportRow = styled.tr`
  &:nth-child(even) {
    background-color: #f0ffff;
  }
`;

const ProgressReportData = styled.td`
  border: 1px solid #ddd;
  padding: 15px;
  color: #555;
`;

const QueryResponseForm = styled.form`
  margin-bottom: 20px;
`;

const QueryResponseTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  resize: none;
`;

const QueryResponseButton = styled.button`
  padding: 10px 20px;
  background-color: #ffa500;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff7f00;
  }
`;

const MonitoringPage = () => {
  // Sample Data
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New enrollment for Math course.' },
    { id: 2, message: 'Student John Doe submitted an assignment.' },
  ]);

  const [progressReports, setProgressReports] = useState([
    { id: 1, student: 'Alice', progress: '80%' },
    { id: 2, student: 'Bob', progress: '65%' },
    { id: 3, student: 'Charlie', progress: '90%' },
  ]);

  // State for Query Response
  const [queryResponse, setQueryResponse] = useState('');

  useEffect(() => {
    // Simulating real-time updates for notifications and progress reports
    const notificationInterval = setInterval(() => {
      // Add new notification
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { id: prevNotifications.length + 1, message: `New notification ${prevNotifications.length + 1}` },
      ]);
      // Remove oldest notification if more than 5
      if (notifications.length > 5) {
        setNotifications((prevNotifications) => prevNotifications.slice(1));
      }

      // Update progress reports randomly
      setProgressReports((prevReports) =>
        prevReports.map((report) => ({
          ...report,
          progress: `${Math.floor(Math.random() * 100)}%`,
        }))
      );
    }, 5000);

    return () => clearInterval(notificationInterval);
  }, [notifications]);

  const handleQueryResponseChange = (event) => {
    setQueryResponse(event.target.value);
  };

  const handleQueryResponseSubmit = (event) => {
    event.preventDefault();
    // Code to handle query response submission
    console.log('Query Response Submitted:', queryResponse);
    // Reset query response field after submission
    setQueryResponse('');
  };

  const dismissNotification = (id) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  return (
    <MonitoringPageContainer>
        <TeacherSidebar />
      <Section>
        <Title>Notifications</Title>
        <NotificationList>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id}>
              {notification.message}
              <DismissButton onClick={() => dismissNotification(notification.id)}>Dismiss</DismissButton>
            </NotificationItem>
          ))}
        </NotificationList>
      </Section>

      <Section>
        <Title>Progress Reports</Title>
        <ProgressReportTable>
          <thead>
            <tr>
              <ProgressReportHeader>Student</ProgressReportHeader>
              <ProgressReportHeader>Progress</ProgressReportHeader>
            </tr>
          </thead>
          <tbody>
            {progressReports.map((report) => (
              <ProgressReportRow key={report.id}>
                <ProgressReportData>{report.student}</ProgressReportData>
                <ProgressReportData>{report.progress}</ProgressReportData>
              </ProgressReportRow>
            ))}
          </tbody>
        </ProgressReportTable>
      </Section>

      <Section>
        <Title>Query Response</Title>
        <QueryResponseForm onSubmit={handleQueryResponseSubmit}>
          <QueryResponseTextarea
            value={queryResponse}
            onChange={handleQueryResponseChange}
            placeholder="Write your response..."
            rows={4}
          />
          <QueryResponseButton type="submit">Send Response</QueryResponseButton>
        </QueryResponseForm>
      </Section>
    </MonitoringPageContainer>
  );
};

export default MonitoringPage;
