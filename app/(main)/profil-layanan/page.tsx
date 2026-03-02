'use client';

import {
  Toolbar,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Heart, DollarSign, ShieldCheck } from 'lucide-react';

export default function ProfilLayananPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Profil Layanan</ToolbarPageTitle>
          <ToolbarDescription>Informasi lengkap tentang layanan yang tersedia</ToolbarDescription>
        </ToolbarHeading>
      </Toolbar>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dana Kematian */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="size-5 text-red-600" />
              Dana Kematian
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p>
                Program Dana Kematian (Dakem) memberikan santunan ahli waris
                anggota yang meninggal dunia.
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Syarat & Ketentuan:
                </h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Anggota aktif minimal 6 bulan</li>
                  <li>Membayar iuran secara rutin</li>
                  <li>Lengkapi dokumen persyaratan</li>
                  <li>Santunan Rp 15.000.000</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dana Sosial */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="size-5 text-green-600" />
              Dana Sosial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p>
                Bantuan sosial untuk anggota yang mengalami kesulitan ekonomi
                atau musibah.
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Jenis Bantuan:
                </h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Bantuan kesehatan: Max Rp 5.000.000</li>
                  <li>Bantuan pendidikan: Max Rp 3.000.000</li>
                  <li>Bantuan musibah: Max Rp 7.000.000</li>
                  <li>Bantuan lainnya sesuai ketentuan</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Keanggotaan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-blue-600" />
              Keanggotaan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p>
                Menjadi anggota memberikan berbagai keuntungan dan perlindungan
                finansial.
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Keuntungan:
                </h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Santunan dana kematian</li>
                  <li>Akses bantuan dana sosial</li>
                  <li>Program kesehatan</li>
                  <li>Kegiatan sosial anggota</li>
                  <li>Iuran terjangkau: Rp 50.000/bulan</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Informasi Umum */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="size-5 text-purple-600" />
              Informasi Umum
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p>
                Perkumpulan Pensiunan Telkom berdiri dengan visi membantu dan
                melindungi kesejahteraan para pensiunan Telkom serta keluarganya.
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Kontak:
                </h4>
                <ul className="space-y-1">
                  <li>📞 (021) 1234-5678</li>
                  <li>📧 info@p2tel.or.id</li>
                  <li>📍 Jl. Gatot Subroto No. 123, Jakarta</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
