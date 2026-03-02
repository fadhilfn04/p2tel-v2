import { DashboardStats, Member, Claim, FinancialReport, DuesPayment, OfficialLetter, Disposition, LetterAgenda, SystemUser, Archive } from '@/lib/types/dashboard';

// Dashboard Statistics
export const mockDashboardStats: DashboardStats = {
  totalAnggota: 1523,
  anggotaAktif: 1445,
  anggotaMeninggal: 78,
  totalKlaimDakem: 234,
  klaimPending: 15,
  totalDicairkan: 3500000000,
};

// Mock Members Data
export const mockMembers: Member[] = [
  {
    id: '1',
    nikap: 'P198001',
    nik_ktp: '3201123456780001',
    nama: 'Ahmad Suryadi',
    status_anggota: 'aktif',
    jenis_anggota: 'biasa',
    status_iuran: 'biasa',
    status_kesehatan: 'prasejahtera',
    tanggalBergabung: new Date('2020-01-15'),
    tempat_lahir: 'Jakarta',
    tanggal_lahir: '1960-05-15',
    jenis_kelamin: 'L',
    agama: 'Islam',
    golongan_darah: 'A',
    status_perkawinan: 'kawin',
    no_kk: '3201123456780001',
    nomor_kontak: '081234567890',
    email: 'ahmad.suryadi@gmail.com',
    alamat: 'Jl. Merdeka No. 123',
    rt: '001',
    rw: '002',
    kelurahan: 'Gambir',
    kecamatan: 'Gambir',
    kota: 'Jakarta Pusat',
    kode_pos: '10110',
    cabang_domisili: 'Jakarta Pusat',
    surat_nikah: null,
    sk_pensiun: null,
  },
  {
    id: '2',
    nikap: 'P198002',
    nik_ktp: '3201123456780002',
    nama: 'Siti Rahayu',
    status_anggota: 'aktif',
    jenis_anggota: 'luar_biasa',
    status_iuran: 'luar_biasa',
    status_kesehatan: 'berdikari',
    tanggalBergabung: new Date('2020-03-20'),
    tempat_lahir: 'Bandung',
    tanggal_lahir: '1962-08-22',
    jenis_kelamin: 'P',
    agama: 'Islam',
    golongan_darah: 'O',
    status_perkawinan: 'tidak_kawin',
    no_kk: '3201123456780002',
    nomor_kontak: '081234567891',
    email: 'siti.rahayu@yahoo.com',
    alamat: 'Jl. Sudirman No. 45',
    rt: '005',
    rw: '003',
    kelurahan: 'Senayan',
    kecamatan: 'Tanah Abang',
    kota: 'Jakarta Pusat',
    kode_pos: '10270',
    cabang_domisili: 'Jakarta Pusat',
    surat_nikah: null,
    sk_pensiun: null,
  },
  {
    id: '3',
    nikap: 'P198003',
    nik_ktp: '3201123456780003',
    nama: 'Budi Santoso',
    status_anggota: 'aktif',
    jenis_anggota: 'biasa',
    status_iuran: 'biasa',
    status_kesehatan: 'umum',
    tanggalBergabung: new Date('2021-05-10'),
    tempat_lahir: 'Jakarta',
    tanggal_lahir: '1961-03-10',
    jenis_kelamin: 'L',
    agama: 'Islam',
    golongan_darah: 'B',
    status_perkawinan: 'kawin',
    no_kk: '3201123456780003',
    nomor_kontak: '081234567892',
    email: 'budi.santoso@gmail.com',
    alamat: 'Jl. Gatot Subroto No. 78',
    rt: '010',
    rw: '005',
    kelurahan: 'Kuningan',
    kecamatan: 'Setiabudi',
    kota: 'Jakarta Selatan',
    kode_pos: '12950',
    cabang_domisili: 'Jakarta Selatan',
    surat_nikah: null,
    sk_pensiun: null,
  },
  {
    id: '4',
    nikap: 'P198004',
    nik_ktp: '3201123456780004',
    nama: 'Dewi Lestari',
    status_anggota: 'aktif',
    jenis_anggota: 'biasa',
    status_iuran: 'biasa',
    status_kesehatan: 'prasejahtera',
    tanggalBergabung: new Date('2021-07-22'),
    tempat_lahir: 'Bandung',
    tanggal_lahir: '1963-12-05',
    jenis_kelamin: 'P',
    agama: 'Islam',
    golongan_darah: 'AB',
    status_perkawinan: 'kawin',
    no_kk: '3201123456780004',
    nomor_kontak: '081234567893',
    email: 'dewi.lestari@yahoo.com',
    alamat: 'Jl. Asia Afrika No. 56',
    rt: '008',
    rw: '004',
    kelurahan: 'Cicendo',
    kecamatan: 'Cicendo',
    kota: 'Bandung',
    kode_pos: '40175',
    cabang_domisili: 'Bandung',
    surat_nikah: null,
    sk_pensiun: null,
  },
  {
    id: '5',
    nikap: 'P198005',
    nik_ktp: '3201123456780005',
    nama: 'Rudi Hartono',
    status_anggota: 'aktif',
    jenis_anggota: 'luar_biasa',
    status_iuran: 'luar_biasa',
    status_kesehatan: 'berdikari',
    tanggalBergabung: new Date('2022-01-08'),
    tempat_lahir: 'Semarang',
    tanggal_lahir: '1959-09-20',
    jenis_kelamin: 'L',
    agama: 'Islam',
    golongan_darah: 'O',
    status_perkawinan: 'kawin',
    no_kk: '3201123456780005',
    nomor_kontak: '081234567894',
    email: 'rudi.hartono@gmail.com',
    alamat: 'Jl. Diponegoro No. 90',
    rt: '012',
    rw: '003',
    kelurahan: 'Simpang Lima',
    kecamatan: 'Semarang Tengah',
    kota: 'Semarang',
    kode_pos: '50139',
    cabang_domisili: 'Semarang',
    surat_nikah: null,
    sk_pensiun: null,
  },
];

// Mock Claims Data
export const mockClaims: Claim[] = [
  {
    id: '1',
    namaAnggota: 'Sri Wahyuni',
    tanggalKlaim: new Date('2024-02-15'),
    jumlah: 15000000,
    status: 'pending',
    kategori: 'dana-kematian',
  },
  {
    id: '2',
    namaAnggota: 'Agus Setiawan',
    tanggalKlaim: new Date('2024-02-14'),
    jumlah: 5000000,
    status: 'disetujui',
    kategori: 'dana-sosial',
  },
  {
    id: '3',
    namaAnggota: 'Rina Melati',
    tanggalKlaim: new Date('2024-02-13'),
    jumlah: 15000000,
    status: 'dicairkan',
    kategori: 'dana-kematian',
  },
  {
    id: '4',
    namaAnggota: 'Deni Kurniawan',
    tanggalKlaim: new Date('2024-02-12'),
    jumlah: 3000000,
    status: 'pending',
    kategori: 'dana-sosial',
  },
  {
    id: '5',
    namaAnggota: 'Maya Sari',
    tanggalKlaim: new Date('2024-02-11'),
    jumlah: 15000000,
    status: 'disetujui',
    kategori: 'dana-kematian',
  },
];

// Mock Financial Reports
export const mockFinancialReports: FinancialReport[] = [
  {
    id: '1',
    bulan: 'Januari',
    tahun: 2024,
    pemasukan: 850000000,
    pengeluaran: 320000000,
    saldo: 530000000,
  },
  {
    id: '2',
    bulan: 'Februari',
    tahun: 2024,
    pemasukan: 850000000,
    pengeluaran: 280000000,
    saldo: 570000000,
  },
  {
    id: '3',
    bulan: 'Maret',
    tahun: 2024,
    pemasukan: 850000000,
    pengeluaran: 350000000,
    saldo: 500000000,
  },
  {
    id: '4',
    bulan: 'April',
    tahun: 2024,
    pemasukan: 850000000,
    pengeluaran: 300000000,
    saldo: 550000000,
  },
];

// Mock Dues Payments
export const mockDuesPayments: DuesPayment[] = [
  {
    id: '1',
    namaAnggota: 'Ahmad Suryadi',
    jumlah: 50000,
    tanggalBayar: new Date('2024-02-15'),
    status: 'lunas',
  },
  {
    id: '2',
    namaAnggota: 'Siti Rahayu',
    jumlah: 50000,
    tanggalBayar: new Date('2024-02-14'),
    status: 'lunas',
  },
  {
    id: '3',
    namaAnggota: 'Budi Santoso',
    jumlah: 50000,
    tanggalBayar: new Date('2024-02-13'),
    status: 'pending',
  },
];

// Mock Official Letters
export const mockOfficialLetters: OfficialLetter[] = [
  {
    id: '1',
    nomorSurat: '001/DKS/2024',
    perihal: 'Undangan Rapat Anggota Tahunan',
    tanggal: new Date('2024-02-15'),
    jenis: 'keluar',
    status: 'selesai',
  },
  {
    id: '2',
    nomorSurat: '056/PROP/2024',
    perihal: 'Permohonan Bantuan Dana Sosial',
    tanggal: new Date('2024-02-14'),
    jenis: 'masuk',
    status: 'diproses',
  },
  {
    id: '3',
    nomorSurat: '002/DKS/2024',
    perihal: 'Surat Edaran Pembayaran Iuran',
    tanggal: new Date('2024-02-13'),
    jenis: 'keluar',
    status: 'selesai',
  },
];

// Mock Dispositions
export const mockDispositions: Disposition[] = [
  {
    id: '1',
    suratId: '2',
    instruksi: 'Tinjau kelengkapan dokumen dan verifikasi data anggota',
    tujuan: 'Bagian Keanggotaan',
    tanggal: new Date('2024-02-14'),
  },
  {
    id: '2',
    suratId: '2',
    instruksi: 'Persiapkan rekomendasi teknis untuk rapat direksi',
    tujuan: 'Bagian Keuangan',
    tanggal: new Date('2024-02-14'),
  },
];

// Mock Letter Agendas
export const mockLetterAgendas: LetterAgenda[] = [
  {
    id: '1',
    nomorAgenda: 'AGD-2024-0156',
    nomorSurat: '056/PROP/2024',
    perihal: 'Permohonan Bantuan Dana Sosial',
    tanggalTerima: new Date('2024-02-14'),
    sifat: 'biasa',
  },
  {
    id: '2',
    nomorAgenda: 'AGD-2024-0155',
    nomorSurat: '055/INST/2024',
    perihal: 'Konfirmasi Jadwal Audit',
    tanggalTerima: new Date('2024-02-13'),
    sifat: 'penting',
  },
  {
    id: '3',
    nomorAgenda: 'AGD-2024-0154',
    nomorSurat: '054/MEM/2024',
    perihal: 'Laporan Bulanan',
    tanggalTerima: new Date('2024-02-12'),
    sifat: 'biasa',
  },
];

// Mock System Users
export const mockSystemUsers: SystemUser[] = [
  {
    id: '1',
    nama: 'Admin Utama',
    email: 'admin@dks.com',
    role: 'admin',
    status: 'aktif',
  },
  {
    id: '2',
    nama: 'Staff Keanggotaan',
    email: 'staff.anggota@dks.com',
    role: 'staff',
    status: 'aktif',
  },
  {
    id: '3',
    nama: 'Staff Keuangan',
    email: 'staff.keuangan@dks.com',
    role: 'staff',
    status: 'aktif',
  },
];

// Mock Archives
export const mockArchives: Archive[] = [
  {
    id: '1',
    namaDokumen: 'Laporan Tahunan 2023.pdf',
    kategori: 'Laporan',
    tanggalUpload: new Date('2024-01-15'),
    ukuran: 2500000,
    jenis: 'application/pdf',
  },
  {
    id: '2',
    namaDokumen: 'Notulen Rapat Direksi.docx',
    kategori: 'Notulen',
    tanggalUpload: new Date('2024-02-10'),
    ukuran: 125000,
    jenis: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  },
  {
    id: '3',
    namaDokumen: 'Data Anggota Q1 2024.xlsx',
    kategori: 'Data',
    tanggalUpload: new Date('2024-02-01'),
    ukuran: 890000,
    jenis: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  },
];

// Helper function to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Helper function to format date
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
};
