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
  // Identitas Anggota
  nikap: string;
  nik_ktp: string;
  nama: string;
  status_anggota: 'aktif' | 'inaktif' | 'meninggal';
  jenis_anggota: 'biasa' | 'luar_biasa';
  status_iuran: 'biasa' | 'luar_biasa';
  status_kesehatan: 'prasejahtera' | 'berdikari' | 'umum';
  tanggalBergabung: Date;

  // Data Pribadi
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: 'L' | 'P';
  agama: string;
  golongan_darah: 'A' | 'B' | 'AB' | 'O' | '';
  status_perkawinan: 'kawin' | 'tidak_kawin' | '';
  no_kk: string;
  nomor_kontak: string;
  email?: string;
  alamat: string;
  rt: string;
  rw: string;
  kelurahan: string;
  kecamatan: string;
  kota: string;
  kode_pos: string;
  cabang_domisili: string;

  // Dokumen
  surat_nikah?: File | null;
  sk_pensiun?: File | null;
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
