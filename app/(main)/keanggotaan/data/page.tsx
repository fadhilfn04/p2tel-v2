'use client';

import { useState } from 'react';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { Member } from '@/lib/types/dashboard';

// Initial form data
const initialFormData = {
  nikap: '',
  nik_ktp: '',
  nama: '',
  status_anggota: '',
  jenis_anggota: '',
  status_iuran: '',
  status_kesehatan: '',
  tempat_lahir: '',
  tanggal_lahir: '',
  jenis_kelamin: '',
  agama: '',
  golongan_darah: '',
  status_perkawinan: '',
  no_kk: '',
  nomor_kontak: '',
  email: '',
  alamat: '',
  rt: '',
  rw: '',
  kelurahan: '',
  kecamatan: '',
  kota: '',
  kode_pos: '',
  cabang_domisili: '',
  surat_nikah: null as File | null,
  sk_pensiun: null as File | null,
};

// Mock members with updated structure
const mockMembersData: Member[] = [
  {
    id: '1',
    nikap: 'P198001',
    nik_ktp: '3201123456780001',
    nama: 'Budi Santoso',
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
    nomor_kontak: '08123456789',
    email: 'budi.santoso@gmail.com',
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
    nama: 'Sri Wahyuni',
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
    nomor_kontak: '08198765432',
    email: 'sri.wahyuni@yahoo.com',
    alamat: 'Jl. Asia Afrika No. 45',
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
];

export default function KeanggotaanDataPage() {
  const [members, setMembers] = useState<Member[]>(mockMembersData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [previewSuratNikah, setPreviewSuratNikah] = useState<string | null>(null);
  const [previewSkPensiun, setPreviewSkPensiun] = useState<string | null>(null);

  const handleFileChange = (
    file: File | null,
    fieldName: string,
    setPreview: (preview: string | null) => void,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (file) {
      setFormData({ ...formData, [fieldName]: file });

      // Create preview
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(file.name);
      }
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    // Create new member with proper type casting
    const newMember: Member = {
      id: String(members.length + 1),
      nikap: formData.nikap,
      nik_ktp: formData.nik_ktp,
      nama: formData.nama,
      status_anggota: formData.status_anggota as Member['status_anggota'],
      jenis_anggota: formData.jenis_anggota as Member['jenis_anggota'],
      status_iuran: formData.status_iuran as Member['status_iuran'],
      status_kesehatan: formData.status_kesehatan as Member['status_kesehatan'],
      tanggalBergabung: new Date(),
      tempat_lahir: formData.tempat_lahir,
      tanggal_lahir: formData.tanggal_lahir,
      jenis_kelamin: formData.jenis_kelamin as Member['jenis_kelamin'],
      agama: formData.agama,
      golongan_darah: formData.golongan_darah as Member['golongan_darah'],
      status_perkawinan: formData.status_perkawinan as Member['status_perkawinan'],
      no_kk: formData.no_kk,
      nomor_kontak: formData.nomor_kontak,
      email: formData.email,
      alamat: formData.alamat,
      rt: formData.rt,
      rw: formData.rw,
      kelurahan: formData.kelurahan,
      kecamatan: formData.kecamatan,
      kota: formData.kota,
      kode_pos: formData.kode_pos,
      cabang_domisili: formData.cabang_domisili,
      surat_nikah: formData.surat_nikah,
      sk_pensiun: formData.sk_pensiun,
    };

    setMembers([...members, newMember]);
    setIsAddModalOpen(false);
    setFormData(initialFormData);
    setPreviewSuratNikah(null);
    setPreviewSkPensiun(null);
  };

  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Pengelolaan Data Anggota</ToolbarPageTitle>
          <ToolbarDescription>Kelola data keanggotaan pensiunan</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button variant="outline" size="sm">
            <Filter className="size-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Search className="size-4 mr-2" />
            Search
          </Button>
          <Button size="sm" onClick={() => setIsAddModalOpen(true)}>
            <Plus className="size-4 mr-2" />
            Tambah Anggota
          </Button>
        </ToolbarActions>
      </Toolbar>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="size-5" />
            Daftar Anggota
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    NIKAP
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Nama Lengkap
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Jenis Anggota
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    No. Kontak
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Cabang
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {member.nikap}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {member.nama}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          NIK: {member.nik_ktp}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={member.jenis_anggota === 'luar_biasa' ? 'primary' : 'secondary'}
                        className="text-xs"
                      >
                        {member.jenis_anggota === 'luar_biasa' ? 'Luar Biasa' : 'Biasa'}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={
                          member.status_anggota === 'aktif'
                            ? 'success'
                            : member.status_anggota === 'meninggal'
                            ? 'destructive'
                            : 'secondary'
                        }
                        className="text-xs"
                      >
                        {member.status_anggota === 'aktif'
                          ? 'Aktif'
                          : member.status_anggota === 'meninggal'
                          ? 'Meninggal'
                          : 'Inaktif'}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {member.nomor_kontak || '-'}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {member.cabang_domisili || '-'}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add Member Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setFormData(initialFormData);
          setPreviewSuratNikah(null);
          setPreviewSkPensiun(null);
        }}
        title="Tambah Anggota Baru"
        size="xl"
      >
        <form onSubmit={handleAdd} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Identitas Anggota */}
            <h3 className="col-span-4 text-sm font-semibold text-gray-800 border-b pb-2">
              Identitas Anggota
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                NIKAP
              </label>
              <input
                type="text"
                required
                value={formData.nikap}
                onChange={(e) => setFormData({ ...formData, nikap: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                NIK KTP
              </label>
              <input
                type="text"
                required
                value={formData.nik_ktp}
                onChange={(e) => setFormData({ ...formData, nik_ktp: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status Anggota
              </label>
              <select
                value={formData.status_anggota}
                onChange={(e) => setFormData({ ...formData, status_anggota: e.target.value as any })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">-- Pilih Status --</option>
                <option value="aktif">Aktif</option>
                <option value="inaktif">Inaktif</option>
                <option value="meninggal">Meninggal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jenis Anggota
              </label>
              <select
                value={formData.jenis_anggota}
                onChange={(e) => setFormData({ ...formData, jenis_anggota: e.target.value as any })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">-- Pilih --</option>
                <option value="biasa">Biasa</option>
                <option value="luar_biasa">Luar Biasa</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status Iuran
              </label>
              <select
                value={formData.status_iuran}
                onChange={(e) => setFormData({ ...formData, status_iuran: e.target.value as any })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">-- Pilih --</option>
                <option value="biasa">Biasa</option>
                <option value="luar_biasa">Luar Biasa</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status Kesehatan
              </label>
              <select
                value={formData.status_kesehatan}
                onChange={(e) => setFormData({ ...formData, status_kesehatan: e.target.value as any })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">-- Pilih --</option>
                <option value="prasejahtera">Prasejahtera</option>
                <option value="berdikari">Berdikari</option>
                <option value="umum">Umum</option>
              </select>
            </div>

            {/* Data Pribadi */}
            <h3 className="col-span-4 text-sm font-semibold text-gray-800 border-b pb-2 mt-4">
              Data Pribadi
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tempat Lahir
              </label>
              <input
                type="text"
                required
                value={formData.tempat_lahir}
                onChange={(e) => setFormData({ ...formData, tempat_lahir: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tanggal Lahir
              </label>
              <input
                type="date"
                required
                value={formData.tanggal_lahir}
                onChange={(e) => setFormData({ ...formData, tanggal_lahir: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jenis Kelamin
              </label>
              <select
                value={formData.jenis_kelamin}
                onChange={(e) => setFormData({ ...formData, jenis_kelamin: e.target.value as any })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">-- Pilih --</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Agama
              </label>
              <input
                type="text"
                required
                value={formData.agama}
                onChange={(e) => setFormData({ ...formData, agama: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Golongan Darah
              </label>
              <select
                value={formData.golongan_darah}
                onChange={(e) => setFormData({ ...formData, golongan_darah: e.target.value as any })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">-- Pilih --</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status Perkawinan
              </label>
              <select
                value={formData.status_perkawinan}
                onChange={(e) => setFormData({ ...formData, status_perkawinan: e.target.value as any })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">-- Pilih --</option>
                <option value="kawin">Kawin</option>
                <option value="tidak_kawin">Belum Kawin</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                No. KK
              </label>
              <input
                type="text"
                required
                value={formData.no_kk}
                onChange={(e) => setFormData({ ...formData, no_kk: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                No. Kontak
              </label>
              <input
                type="text"
                required
                value={formData.nomor_kontak}
                onChange={(e) => setFormData({ ...formData, nomor_kontak: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alamat
              </label>
              <input
                type="text"
                required
                value={formData.alamat}
                onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                RT
              </label>
              <input
                type="text"
                required
                value={formData.rt}
                onChange={(e) => setFormData({ ...formData, rt: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                RW
              </label>
              <input
                type="text"
                required
                value={formData.rw}
                onChange={(e) => setFormData({ ...formData, rw: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kelurahan
              </label>
              <input
                type="text"
                required
                value={formData.kelurahan}
                onChange={(e) => setFormData({ ...formData, kelurahan: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kecamatan
              </label>
              <input
                type="text"
                required
                value={formData.kecamatan}
                onChange={(e) => setFormData({ ...formData, kecamatan: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kota
              </label>
              <input
                type="text"
                required
                value={formData.kota}
                onChange={(e) => setFormData({ ...formData, kota: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kode Pos
              </label>
              <input
                type="text"
                required
                value={formData.kode_pos}
                onChange={(e) => setFormData({ ...formData, kode_pos: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cabang Domisili
              </label>
              <input
                type="text"
                required
                value={formData.cabang_domisili}
                onChange={(e) => setFormData({ ...formData, cabang_domisili: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Dokumen Pendukung */}
            <h3 className="col-span-4 text-sm font-semibold text-gray-800 border-b pb-2 mt-4">
              Dokumen Pendukung
            </h3>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Surat Nikah
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  handleFileChange(e.target.files?.[0] || null, 'surat_nikah', setPreviewSuratNikah, e.target as any)
                }
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              />
              {previewSuratNikah && (
                <div className="mt-3 border rounded-lg p-2 bg-gray-50 relative">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, surat_nikah: null });
                      setPreviewSuratNikah(null);
                    }}
                    className="absolute top-2 right-2 text-xs text-red-600 hover:underline z-10"
                  >
                    Hapus
                  </button>
                  {formData.surat_nikah?.type?.startsWith('image/') ? (
                    <img
                      src={previewSuratNikah}
                      alt="Preview Surat Nikah"
                      className="max-h-48 mx-auto rounded"
                    />
                  ) : (
                    <iframe src={previewSuratNikah} className="w-full h-48 rounded" />
                  )}
                </div>
              )}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SK Pensiun
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  handleFileChange(e.target.files?.[0] || null, 'sk_pensiun', setPreviewSkPensiun, e.target as any)
                }
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              />
              {previewSkPensiun && (
                <div className="mt-3 border rounded-lg p-2 bg-gray-50 relative">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, sk_pensiun: null });
                      setPreviewSkPensiun(null);
                    }}
                    className="absolute top-2 right-2 text-xs text-red-600 hover:underline z-10"
                  >
                    Hapus
                  </button>
                  {formData.sk_pensiun?.type?.startsWith('image/') ? (
                    <img
                      src={previewSkPensiun}
                      alt="Preview SK Pensiun"
                      className="max-h-48 mx-auto rounded"
                    />
                  ) : (
                    <iframe src={previewSkPensiun} className="w-full h-48 rounded" />
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t">
            <button
              type="button"
              onClick={() => {
                setIsAddModalOpen(false);
                setFormData(initialFormData);
                setPreviewSuratNikah(null);
                setPreviewSkPensiun(null);
              }}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow"
            >
              Tambah Data
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
