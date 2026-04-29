// --- Data Hardcoded dari ISA dokumen.docx ---

const itilAssessment = {
    labels: ['Incident Management', 'Change Enablement', 'Service Request Mgmt', 'Info Security Mgmt', 'Monitoring & Event Mgmt'],
    scores: [3, 3, 2, 3, 3] // Dari Bab 6.1
};

const risksData = [
    { id: 'R1', asset: 'Jaringan Internet', threat: 'Gangguan jaringan', vulnerability: 'Ketergantungan pada 1–2 provider', impact: 'High', likelihood: 'High', level: 'Critical', control: 'Multi ISP redundancy, monitoring real-time, SOP' },
    { id: 'R2', asset: 'Data Kependudukan', threat: 'Human error input', vulnerability: 'Validasi sistem lemah', impact: 'High', likelihood: 'High', level: 'Critical', control: 'Validasi otomatis, dropdown input, pelatihan' },
    { id: 'R3', asset: 'Aplikasi SIGAP', threat: 'Sistem masih terbatas', vulnerability: 'SIGAP masih tahap pengembangan', impact: 'Medium', likelihood: 'Medium', level: 'Moderate', control: 'Pengembangan fitur SIGAP, integrasi penuh' },
    { id: 'R4', asset: 'Sistem SIAK', threat: 'Gangguan sistem pusat', vulnerability: 'Database terpusat (kontrol terbatas)', impact: 'High', likelihood: 'Medium', level: 'High', control: 'Koordinasi pusat, fallback manual' },
    { id: 'R5', asset: 'Hak Akses Sistem', threat: 'Penyalahgunaan akses', vulnerability: 'Tidak semua punya akses & level berbeda', impact: 'High', likelihood: 'High', level: 'Critical', control: 'Audit akses berkala, RBAC' },
    { id: 'R6', asset: 'Monitoring Sistem', threat: 'Keterlambatan deteksi', vulnerability: 'Monitoring tidak real-time', impact: 'High', likelihood: 'Medium', level: 'High', control: 'Implementasi monitoring real-time + alert' },
    { id: 'R7', asset: 'Proses Layanan IT', threat: 'Tidak ada SOP', vulnerability: 'Proses layanan belum terstandarisasi', impact: 'High', likelihood: 'Medium', level: 'High', control: 'Penyusunan SOP & SLA' },
    { id: 'R8', asset: 'Perubahan Sistem', threat: 'Error setelah update', vulnerability: 'Tidak ada dokumentasi perubahan', impact: 'Medium', likelihood: 'Medium', level: 'Moderate', control: 'Change management & dokumentasi' },
    { id: 'R9', asset: 'SDM Operator', threat: 'Ketergantungan operator', vulnerability: 'Kompetensi tidak merata', impact: 'Medium', likelihood: 'Medium', level: 'Moderate', control: 'Pelatihan berkala & distribusi akses' },
    { id: 'R10', asset: 'Infrastruktur TI', threat: 'Ketergantungan nasional', vulnerability: 'Sistem layanan tergantung pusat', impact: 'High', likelihood: 'Medium', level: 'High', control: 'SLA dengan pusat + prosedur fallback' }
];

const auditFindings = [
    {
        domain: 'Incident Management',
        score: 3,
        kondisi: 'Gangguan layanan ditangani langsung oleh operator tanpa prosedur formal.',
        gap: 'Tidak adanya prosedur tertulis dan incident log menyebabkan evaluasi sulit dilakukan.',
        dampak: 'Gangguan menghambat pelayanan dan berpotensi berulang.'
    },
    {
        domain: 'Change Enablement',
        score: 3,
        kondisi: 'Pembaruan sistem rutin, tapi tidak didokumentasikan secara formal.',
        gap: 'Tidak adanya dokumentasi & risk analysis menyebabkan sulit dikontrol.',
        dampak: 'Perubahan sistem berpotensi menimbulkan gangguan baru.'
    },
    {
        domain: 'Service Request Management',
        score: 2,
        kondisi: 'Layanan utama menggunakan SIAK, SIGAP masih terbatas, belum ada pengelolaan permintaan terstruktur.',
        gap: 'Tidak adanya sistem terstruktur dan SLA membuat waktu penyelesaian tidak standar.',
        dampak: 'Layanan digital belum optimal dan potensi keterlambatan tidak terpantau.'
    },
    {
        domain: 'Information Security Management',
        score: 3,
        kondisi: 'Akses sistem dibatasi level & SK, tapi belum ada kebijakan keamanan formal. Ada human error.',
        gap: 'Pengelolaan keamanan bergantung praktik teknis tanpa standar tertulis.',
        dampak: 'Risiko kesalahan data berpotensi mempengaruhi akurasi informasi kependudukan.'
    },
    {
        domain: 'Monitoring & Event Management',
        score: 3,
        kondisi: 'Monitoring terbatas pada pencatatan aktivitas pengguna, tidak real-time.',
        gap: 'Sistem monitoring tidak terintegrasi.',
        dampak: 'Gangguan atau aktivitas abnormal sulit dideteksi secara cepat.'
    }
];

const recommendations = [
    { id: 'R1', priority: 'High', timeline: '0-3 bulan', title: 'Multi ISP redundancy & Monitoring', owner: 'Tim IT & Provider' },
    { id: 'R2', priority: 'High', timeline: '0-3 bulan', title: 'Validasi Otomatis & Dropdown', owner: 'Operator & Tim IT' },
    { id: 'R4', priority: 'High', timeline: '0-3 bulan', title: 'Koordinasi Pusat & Fallback', owner: 'Admin Sistem' },
    { id: 'R5', priority: 'High', timeline: '0-3 bulan', title: 'Implementasi RBAC & Audit Akses', owner: 'Tim IT' },
    { id: 'R6', priority: 'High', timeline: '0-3 bulan', title: 'Monitoring Real-time & Alert', owner: 'Manajemen' },
    { id: 'R7', priority: 'High', timeline: '0-3 bulan', title: 'Penyusunan SOP dan SLA', owner: 'Dukcapil & Pusat' },
    { id: 'R10', priority: 'High', timeline: '0-3 bulan', title: 'SLA Pusat & Fallback', owner: 'HR & Tim IT' },
    { id: 'R3', priority: 'Medium', timeline: '3-6 bulan', title: 'Pengembangan SIGAP & Integrasi', owner: 'Dukcapil & Tim IT' },
    { id: 'R8', priority: 'Medium', timeline: '3-6 bulan', title: 'Change Management & Dokumentasi', owner: 'Developer SIGAP' },
    { id: 'R9', priority: 'Medium', timeline: '3-6 bulan', title: 'Pelatihan Operator & Distribusi', owner: 'Tim IT' }
];

const interviewsData = [
    { no: 1, text: 'Sistem aplikasi untuk pelayanan dari kementerian adalah SIAK dari kantor pusat. Kalau dari Minahasa Utara sendiri menggunakan aplikasi pelayanan online android, SIGAP Dukcapil.' },
    { no: 2, text: 'SIAK sudah digunakan sejak tahun 2008, sedangkan SIGAP baru mulai digunakan akhir tahun lalu dan masih dalam tahap pengembangan/uji coba.' },
    { no: 3, text: 'Yang bertanggung jawab mengelola sistem adalah Kepala Dinas. Database utama hanya berada di pusat.' },
    { no: 4, text: 'Ada tim ADB yang bertugas untuk melayani kendala teknis sistem.' },
    { no: 5, text: 'Ada pelatihan khusus bagi pegawai sebelum mulai menggunakan aplikasi.' },
    { no: 6, text: 'Sistem ini digunakan dengan alasan untuk mempermudah, mempercepat, dan meningkatkan efisiensi pelayanan agar tidak rumit.' },
    { no: 7, text: 'Kalau tidak ada sistem informasi, semua harus manual termasuk pengarsipan, dan prosesnya akan memakan waktu sangat lama.' },
    { no: 8, text: '(Ada di pagar / keamanan tambahan)' },
    { no: 9, text: 'SIAK mencakup semua jenis pelayanan (KK, KTP, Akta Kelahiran, dll). Sedangkan SIGAP baru mencakup sekitar 4-5 jenis pelayanan saja dan fiturnya masih terbatas.' },
    { no: 10, text: 'Hak akses dimiliki oleh operator berdasarkan SK Kepala Dinas. Tidak sembarang pegawai Dukcapil bisa akses karena menyangkut data pribadi masyarakat yang sensitif.' },
    { no: 11, text: 'Tidak semua pegawai memiliki akses login.' },
    { no: 12, text: 'Ada tingkatan level/role untuk pembagian hak akses di dalam sistem.' },
    { no: 13, text: 'Hak akses terbagi-bagi: ada yang khusus di pencatatan sipil, ada yang hanya kependudukan (duk), dan ada administrator yang memiliki akses ke semua fitur.' },
    { no: 14, text: 'Pasti pernah terjadi gangguan sistem, misalnya gangguan jaringan. Awalnya hanya menggunakan satu provider (Telkom Fiber), tapi sekarang sudah redundant menggunakan 2 provider jaringan berbeda.' },
    { no: 15, text: 'Proses pencadangan (backup) data dan keamanan database secara keseluruhan dikelola di pusat. Di daerah, pengamanan dilakukan hanya untuk mencegah kebocoran data lokal.' },
    { no: 16, text: 'Human error pasti sering terjadi, misalnya tertukarnya input jenis kelamin atau kesalahan ketik (typo) pada tanggal lahir yang disebabkan oleh kelalaian operator/pemohon.' },
    { no: 17, text: 'Aktivitas pengguna tercatat dalam sistem (log), tapi tidak semua pengguna memiliki hak untuk melihat catatan log tersebut.' },
    { no: 18, text: 'Pembaruan sistem rutin dilakukan. Aplikasi SIGAP tahun lalu mendapat 2 hingga 3 kali pembaruan, dan tahun ini juga akan ada pembaruan lanjutan.' },
    { no: 19, text: 'Pelatihan rutin (In-house training) dari pusat untuk peningkatan kompetensi sudah dijadwalkan secara berkala, contohnya pada bulan Juni. Materi dari pusat akan diterapkan kembali di daerah.' },
    { no: 20, text: 'Evaluasi sistem selalu dilakukan melalui forum/bimtek. Karena SIAK adalah sistem nasional, evaluasi membahas perbaikan apa saja yang harus diselesaikan untuk pembaharuan ke depannya.' }
];

// --- App Logic ---

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCharts();
    populateMetrics();
    populateTopRisks();
    populateRiskTable();
    populateAuditFindings();
    populateRecommendations();
    populateInterviews();
    setupRiskFilter();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('.dashboard-section');
    const pageTitle = document.getElementById('page-title');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Update title
            pageTitle.textContent = link.querySelector('span').textContent;

            // Show section
            const targetId = link.getAttribute('data-target');
            sections.forEach(sec => {
                sec.classList.remove('active');
                if (sec.id === targetId) {
                    sec.classList.add('active');
                }
            });
        });
    });
}

function getBadgeClass(level) {
    switch(level.toLowerCase()) {
        case 'critical': return 'critical';
        case 'high': return 'high';
        case 'moderate': return 'moderate';
        case 'low': return 'low';
        default: return '';
    }
}

function populateMetrics() {
    const counts = { Critical: 0, High: 0, Moderate: 0, Low: 0 };
    risksData.forEach(r => counts[r.level]++);

    document.getElementById('metric-critical').textContent = counts.Critical;
    document.getElementById('metric-high').textContent = counts.High;
    document.getElementById('metric-moderate').textContent = counts.Moderate;

    const avgScore = (itilAssessment.scores.reduce((a,b) => a+b, 0) / itilAssessment.scores.length).toFixed(1);
    document.getElementById('metric-score').innerHTML = `${avgScore}<span class="small-text">/5</span>`;
}

function initCharts() {
    // 1. Radar Chart for ITIL Assessment
    const ctxRadar = document.getElementById('radarChart').getContext('2d');
    
    // Set global default color for dark theme
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = 'Inter';

    new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: itilAssessment.labels,
            datasets: [{
                label: 'Maturity Score',
                data: itilAssessment.scores,
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: '#3b82f6',
                pointBackgroundColor: '#60a5fa',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#3b82f6'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    pointLabels: { color: '#f8fafc', font: { size: 11 } },
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1,
                        display: false
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 2. Pie Chart for Risk Distribution
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    const counts = { Critical: 0, High: 0, Moderate: 0, Low: 0 };
    risksData.forEach(r => counts[r.level]++);

    new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: ['Critical', 'High', 'Moderate'],
            datasets: [{
                data: [counts.Critical, counts.High, counts.Moderate],
                backgroundColor: [
                    '#ef4444', // Red
                    '#f97316', // Orange
                    '#eab308'  // Yellow
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#f8fafc', padding: 20 }
                }
            }
        }
    });
}

function populateTopRisks() {
    const tbody = document.getElementById('top-risks-body');
    const topRisks = risksData.filter(r => r.level === 'Critical').slice(0, 3);
    
    topRisks.forEach(risk => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${risk.id}</strong></td>
            <td>${risk.asset}</td>
            <td>${risk.threat}</td>
            <td><span class="badge ${getBadgeClass(risk.level)}">${risk.level}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function renderRiskTable(data) {
    const tbody = document.getElementById('risk-table-body');
    tbody.innerHTML = '';
    
    data.forEach(risk => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${risk.id}</strong></td>
            <td>${risk.asset}</td>
            <td>${risk.threat}</td>
            <td>${risk.vulnerability}</td>
            <td>${risk.impact}</td>
            <td>${risk.likelihood}</td>
            <td><span class="badge ${getBadgeClass(risk.level)}">${risk.level}</span></td>
            <td>${risk.control}</td>
        `;
        tbody.appendChild(tr);
    });
}

function populateRiskTable() {
    renderRiskTable(risksData);
}

function setupRiskFilter() {
    const filter = document.getElementById('risk-filter');
    filter.addEventListener('change', (e) => {
        const level = e.target.value;
        if (level === 'all') {
            renderRiskTable(risksData);
        } else {
            renderRiskTable(risksData.filter(r => r.level === level));
        }
    });
}

function populateAuditFindings() {
    const container = document.getElementById('findings-container');
    
    auditFindings.forEach(finding => {
        const card = document.createElement('div');
        card.className = 'finding-card glass';
        card.innerHTML = `
            <div class="finding-header">
                <h3>${finding.domain}</h3>
                <span class="score-badge">Score: ${finding.score}/5</span>
            </div>
            <div class="finding-body">
                <div class="data-group">
                    <h4>Kondisi Aktual</h4>
                    <p>${finding.kondisi}</p>
                </div>
                <div class="data-group">
                    <h4>Gap Analysis</h4>
                    <p>${finding.gap}</p>
                </div>
                <div class="data-group">
                    <h4>Dampak</h4>
                    <p>${finding.dampak}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function populateRecommendations() {
    const container = document.getElementById('timeline-container');
    
    recommendations.forEach(rec => {
        const priorityClass = rec.priority === 'High' ? 'priority-high' : 'priority-medium';
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-header">
                <h4>${rec.id} - ${rec.title}</h4>
                <span class="priority-badge ${priorityClass}">${rec.priority}</span>
            </div>
            <div class="timeline-content">
                <div class="data-group">
                    <h4>Timeline / Target</h4>
                    <p><i class='bx bx-time-five'></i> ${rec.timeline}</p>
                </div>
                <div class="data-group">
                    <h4>PIC / Owner</h4>
                    <p><i class='bx bx-user'></i> ${rec.owner}</p>
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

function populateInterviews() {
    const tbody = document.getElementById('interview-table-body');
    if (!tbody) return;
    
    interviewsData.forEach(interview => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="width: 50px;"><strong>${interview.no}</strong></td>
            <td>${interview.text}</td>
        `;
        tbody.appendChild(tr);
    });
}
