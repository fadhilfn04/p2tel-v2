// Dashboard Statistics Types
export interface DashboardStats {
  totalAnggota: number;
  anggotaAktif: number;
  anggotaMeninggal: number;
  totalKlaimDakem: number;
  klaimPending: number;
  totalDicairkan: number;
}

// Member Types
export interface Member {
  id: string;
  nama: string;
  nik: string;
  tanggalBergabung: Date;
  status: 'aktif' | 'tidak-aktif' | 'meninggal';
  alamat?: string;
  telepon?: string;
}

// Claim Types
export interface Claim {
  id: string;
  namaAnggota: string;
  tanggalKlaim: Date;
  jumlah: number;
  status: 'pending' | 'disetujui' | 'ditolak' | 'dicairkan';
  kategori: 'dana-kematian' | 'dana-sosial';
}

// Finance Types
export interface FinancialReport {
  id: string;
  bulan: string;
  tahun: number;
  pemasukan: number;
  pengeluaran: number;
  saldo: number;
}

export interface DuesPayment {
  id: string;
  namaAnggota: string;
  jumlah: number;
  tanggalBayar: Date;
  status: 'lunas' | 'pending' | 'terlambat';
}

// Letter Types
export interface OfficialLetter {
  id: string;
  nomorSurat: string;
  perihal: string;
  tanggal: Date;
  jenis: 'masuk' | 'keluar';
  status: 'pending' | 'diproses' | 'selesai';
}

export interface Disposition {
  id: string;
  suratId: string;
  instruksi: string;
  tujuan: string;
  tanggal: Date;
}

export interface LetterAgenda {
  id: string;
  nomorAgenda: string;
  nomorSurat: string;
  perihal: string;
  tanggalTerima: Date;
  sifat: 'penting' | 'biasa' | 'rahasia';
}

// User Types
export interface SystemUser {
  id: string;
  nama: string;
  email: string;
  role: 'admin' | 'staff' | 'viewer';
  status: 'aktif' | 'tidak-aktif';
}

// Archive Types
export interface Archive {
  id: string;
  namaDokumen: string;
  kategori: string;
  tanggalUpload: Date;
  ukuran: number;
  jenis: string;
}
