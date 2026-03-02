'use client';

import { useState } from 'react';
import {
  Toolbar,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    id: 1,
    category: 'Keanggotaan',
    question: 'Bagaimana cara menjadi anggota?',
    answer:
      'Untuk menjadi anggota, Anda perlu mengisi formulir pendaftaran, melampirkan fotokopi KTP, pas foto, dan membayar biaya pendaftaran sebesar Rp 100.000. Proses approval memakan waktu 1-3 hari kerja.',
  },
  {
    id: 2,
    category: 'Keanggotaan',
    question: 'Berapa besaran iuran bulanan?',
    answer:
      'Iuran bulanan anggota adalah Rp 50.000. Pembayaran dapat dilakukan secara tunip, transfer bank, atau autodebit.',
  },
  {
    id: 3,
    category: 'Dana Kematian',
    question: 'Berapa santunan dana kematian?',
    answer:
      'Santunan dana kematian yang diberikan adalah sebesar Rp 15.000.000 untuk ahli waris yang sah dari anggota yang meninggal, dengan syarat anggota telah aktif minimal 6 bulan.',
  },
  {
    id: 4,
    category: 'Dana Kematian',
    question: 'Dokumen apa saja yang diperlukan untuk klaim dana kematian?',
    answer:
      'Dokumen yang diperlukan: Surat keterangan kematian dari rumah sakit/instansi berwenang, fotokopi KTP ahli waris, surat keterangan ahli waris, bukti keanggotaan, dan formulir klaim yang telah diisi.',
  },
  {
    id: 5,
    category: 'Dana Sosial',
    question: 'Apa saja jenis bantuan dana sosial yang tersedia?',
    answer:
      'Jenis bantuan: Bantuan kesehatan (max Rp 5.000.000), bantuan pendidikan (max Rp 3.000.000), bantuan musibah (max Rp 7.000.000), dan bantuan lainnya sesuai ketentuan pengurus.',
  },
  {
    id: 6,
    category: 'Klaim',
    question: 'Berapa lama proses pencairan dana klaim?',
    answer:
      'Proses klaim memakan waktu 7-14 hari kerja setelah semua dokumen lengkap diterima. Dana akan ditransfer ke rekening ahli waris.',
  },
  {
    id: 7,
    category: 'Pembayaran',
    question: 'Bagaimana cara membayar iuran?',
    answer:
      'Pembayaran iuran dapat dilakukan melalui: Tunip di kantor, transfer ke rekening koperasi (BCA: 123-456-7890), atau autodebit untuk anggota yang telah mendaftar.',
  },
  {
    id: 8,
    category: 'Lainnya',
    question: 'Apakah iuran bisa ditanggung?',
    answer:
      'Ya, jika Anda menunggak iuran lebih dari 3 bulan, keanggotaan dapat ditangguhkan. Untuk mengaktifkan kembali, perlu membayar semua tunggakan dan denda administrasi Rp 50.000.',
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };

  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>FAQ</ToolbarPageTitle>
          <ToolbarDescription>Pertanyaan yang Sering Diajukan</ToolbarDescription>
        </ToolbarHeading>
      </Toolbar>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="size-5" />
            Daftar Pertanyaan Umum
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
                        {faq.category}
                      </span>
                    </div>
                    <p className="font-medium text-sm text-gray-900 dark:text-gray-100">
                      {faq.question}
                    </p>
                  </div>
                  {openItems.has(faq.id) ? (
                    <ChevronUp className="size-5 text-gray-500 flex-shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="size-5 text-gray-500 flex-shrink-0 ml-2" />
                  )}
                </button>
                {openItems.has(faq.id) && (
                  <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
