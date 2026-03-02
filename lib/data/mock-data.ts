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
    nama: 'Ahmad Suryadi',
    nik: '3201123456780001',
    tanggalBergabung: new Date('2020-01-15'),
    status: 'aktif',
    alamat: 'Jl. Merdeka No. 123, Jakarta',
    telepon: '081234567890',
  },
  {
    id: '2',
    nama: 'Siti Rahayu',
    nik: '3201123456780002',
    tanggalBergabung: new Date('2020-03-20'),
    status: 'aktif',
    alamat: 'Jl. Sudirman No. 45, Bandung',
    telepon: '081234567891',
  },
  {
    id: '3',
    nama: 'Budi Santoso',
    nik: '3201123456780003',
    tanggalBergabung: new Date('2021-05-10'),
    status: 'aktif',
    alamat: 'Jl. Gatot Subroto No. 78, Jakarta',
    telepon: '081234567892',
  },
  {
    id: '4',
    nama: 'Dewi Lestari',
    nik: '3201123456780004',
    tanggalBergabung: new Date('2021-07-22'),
    status: 'aktif',
    alamat: 'Jl. Asia Afrika No. 56, Bandung',
    telepon: '081234567893',
  },
  {
    id: '5',
    nama: 'Rudi Hartono',
    nik: '3201123456780005',
    tanggalBergabung: new Date('2022-01-08'),
    status: 'aktif',
    alamat: 'Jl. Diponegoro No. 90, Semarang',
    telepon: '081234567894',
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
