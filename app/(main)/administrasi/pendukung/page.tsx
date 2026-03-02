'use client';

import { Toolbar, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/components/layout/toolbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Database, Shield, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PendukungPage() {
  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Manajemen Pendukung</ToolbarPageTitle>
          <ToolbarDescription>Konfigurasi sistem dan pengaturan</ToolbarDescription>
        </ToolbarHeading>
      </Toolbar>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="size-5 text-blue-600" />
              Database & Backup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Backup Otomatis</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Setiap hari pukul 00:00</p>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Backup Sekarang
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="size-5 text-green-600" />
              Keamanan Sistem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">SSL Certificate</p>
                <p className="text-xs text-green-600">Active</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Last Security Scan</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">2 hari lalu</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="size-5 text-purple-600" />
              Status Server
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">CPU Usage</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">45%</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Memory</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">2.4 GB / 8 GB</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="size-5 text-orange-600" />
              Pengaturan Aplikasi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button size="sm" variant="outline" className="w-full">
                Edit Konfigurasi
              </Button>
              <Button size="sm" variant="outline" className="w-full">
                Log Aktivitas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
