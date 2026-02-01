// Ng Kee Hang
const eventsData = [
    {
        id: "ey-challenge",
        title: "Join the 2026 EY AI & Data Challenge",
        price: 10,
        category: "Competition",
        date: "20 Jan 2026 - 13 Mar 2026",
        location: "Online",
        description: "Win Up to USD 10,000! optimizing clean water supply...",
        image: "assets/EY.png",
        fullDetails: `  <p><strong>MMU students, don't miss this exciting opportunity!</strong></p>
    
                        <p>In addition to the chance to win <strong>global cash prizes</strong>, <strong>Cadet points</strong> will be awarded to eligible participants.</p>
    
                        <ul style="margin-bottom: 15px; padding-left: 20px;">
                            <li>Open to students from <strong>any faculty and any year of study</strong></li>
                            <li>Gain hands-on experience and showcase your AI & data skills</li>
                        </ul>

                        <h3>How to Participate:</h3>
                            <ol style="padding-left: 20px; margin-bottom: 20px;">
                                <li><strong>Join the Challenge:</strong> Click the register below and pay RM 10 registration fee to register.</li>
                                <li><strong>Claim Cadet Points:</strong> Scan the QR code provided in the poster after submission.</li>
                                <li><strong>Wait for Results:</strong> Winners will be announced in April 2026.</li>
                            </ol>

                        <p style="font-size: 0.9em; color: gray;"><em>Source: Faculty of Info Science & Tech (23 Jan 2026)</em></p>
                    `
    },
    {
        id: "jda-info",
        title: "James Dyson Award (JDA) 2026 Info Session",
        price: 10,
        category: "Academic / Seminar",
        date: "26 January 2026, 10:00 am",
        location: "MS Teams",
        description: "You are invited to join an exciting Industrial Talk...",
        image: "assets/JDA.jpg",
        fullDetails: `  <p><strong>Dear Students,</strong><br>
                            You're invited to join an exciting Industrial Talk on the <strong>James Dyson Award (JDA) 2026</strong>, organised by the FET Industrial Linkage Committee.</p>
                        <h3>Speakers:</h3>

                        <ul style="padding-left: 20px;">
                            <li><strong>Ms. Azalea Shezdiana Binti Badrulshah</strong>, CEng MIMechE</li>
                            <li><strong>Mr. Zahirul Syafiq bin Ahmad</strong>, Senior Creative Designer</li>
                        </ul>

                        <table border="1" style="width: 100%; font-size: 1.2rem; margin-top: 10px; border-collapse: collapse;">
                        <tr><td>Date</td><td>26 January 2026 (Monday)</td></tr>
                        <tr><td>Time</td><td>10.00 a.m. - 11.00 a.m.</td></tr>
                        <tr><td>Venue</td><td>MS Teams</td></tr>
                        </table>
            
                        <p>This session will introduce the James Dyson Award 2026, a global engineering and design competition open to students and recent graduates. Join the session to learn how you can participate and showcase your ideas on an international platform.</p>
                        <p><strong>Note:</strong> Students may join the session by scanning the QR code on the event poster. Attending students will earn <strong>0.5 iCadet Professional Development Point</strong>.</p>
                        <p>See you there!</p>
                        <p><strong>Registration Fee:</strong> RM 10</p>

                        <br>
                        <p style="font-size: 0.9em; color: gray;">
                            Best regards,<br>
                            FET Industrial Linkage Committee<br>
                            Faculty of Engineering & Technology, MMU
                        </p>
                    `
    },
    {
        id: "web-dev-workshop",
        title: "Full Stack Web Development Workshop",
        price: 10,
        category: "Workshop",
        date: "1 Dec 2025, 9:00 AM",
        location: "FCI Lab 1, MMU Cyberjaya",
        description: "Learn HTML, CSS, and JS from scratch. Beginners welcome!",
        image: "https://placehold.co/600x400/3498db/ffffff?text=Coding+Workshop",
        fullDetails: `
                        <h3>Master the Web!</h3>
                        <p>Join us for a comprehensive one-day workshop where you will build your first website.</p>
                        <p><strong>What you will learn:</strong></p>
                        <ul>
                            <li>HTML5 Structure</li>
                            <li>CSS3 Styling & Flexbox</li>
                            <li>JavaScript Basics</li>
                        </ul>
                        <p><strong>Registration Fee:</strong> RM 10</p>
                        <p><strong>Requirement:</strong> Please bring your own laptop.</p>
                    `
    },
    {
        id: "career-fair-2026",
        title: "MMU Mega Career Fair 2026",
        price: 10,
        category: "Club Activity",
        date: "25 Nov 2025, 10:00 AM - 5:00 PM",
        location: "Grand Hall, MMU Cyberjaya",
        description: "Meet top employers like Google, Petronas, and Maybank.",
        image: "https://placehold.co/600x400/e74c3c/ffffff?text=Career+Fair",
        fullDetails: `
                        <h3>Secure Your Future Internship!</h3>
                        <p>The biggest career fair of the year is back. Bring your resume and dress to impress.</p>
                        <p><strong>Participating Companies:</strong></p>
                        <ul>
                            <li>Google Malaysia</li>
                            <li>Petronas Digital</li>
                            <li>Maybank Fintech</li>
                            <li>Shopee</li>
                        </ul>
                        <p><strong>Registration Fee:</strong> RM 10</p>
                    `
    },
    {
        id: "esports-valorant",
        title: "MMU Inter-Faculty Valorant Championship",
        price: 10,
        category: "Competition",
        date: "22 Nov 2025, 8:00 PM",
        location: "Online / Discord",
        description: "Battle it out for the title of MMU Champion. RM1000 Prize Pool.",
        image: "https://placehold.co/600x400/2c3e50/ffffff?text=E-Sports",
        fullDetails: `
                        <h3>Tactical Shooter Showdown</h3>
                        <p>Gather your squad (5 players) and register now.</p>
                        <p><strong>Prize Pool:</strong></p>
                        <ul>
                            <li>1st Place: RM 500</li>
                            <li>2nd Place: RM 300</li>
                            <li>3rd Place: RM 200</li>
                        </ul>
                        <p><strong>Registration Fee:</strong> RM 10</p>
                        <p>Matches will be streamed live on Twitch.</p>
                    `
    },
    {
        id: "charity-run",
        title: "Run for Hope: 5KM Charity Run",
        price: 10,
        category: "Volunteer / Community",
        date: "30 Oct 2025, 7:00 AM",
        location: "MMU Stadium",
        description: "Join us for a healthy run to support local orphanages.",
        image: "https://placehold.co/600x400/27ae60/ffffff?text=Charity+Run",
        fullDetails: `
                        <h3>Run for a Good Cause</h3>
                        <p>All proceeds will be donated to the Cyberjaya Orphanage Home.</p>
                        <p><strong>Registration Fee:</strong> RM 10 (Includes T-shirt and Medal)</p>
                        <p>Water stations will be provided at every 2KM.</p>
                    `
    },
    {
        id: "cultural-night",
        title: "International Cultural Night 2026",
        price: 10,
        category: "Cultural",
        date: "15 July 2025, 7:30 PM",
        location: "MMU Main Hall",
        description: "Experience food, dance, and music from over 20 countries.",
        image: "https://placehold.co/600x400/f39c12/ffffff?text=Cultural+Night",
        fullDetails: `
                        <h3>A Night of Diversity</h3>
                        <p>Celebrating the diverse student body of MMU.</p>
                        <p><strong>Activities:</strong></p>
                        <ul>
                            <li>Traditional Fashion Show</li>
                            <li>International Food Festival</li>
                            <li>Dance Performances</li>
                        </ul>
                        <p><strong>Ticket Price:</strong> RM 10</p>
                        <p>Ticket includes food vouchers!</p>
                    `
    }
];