// ============================================================
// PLANTILLA DE CONFIGURACIÓN - SIN SECRETOS REALES
// ============================================================
// Este archivo es una plantilla. Los valores serán reemplazados
// por GitHub Actions durante el despliegue usando los secrets.
// NO modifiques los placeholders __AZURE_...__

window.APP_CONFIG = {
  // ========== CONFIGURACIÓN AZURE (SECRETOS) ==========
  // Estos valores son reemplazados automáticamente por GitHub Actions
  AZURE_TENANT_ID: '__AZURE_TENANT_ID__',
  AZURE_CLIENT_ID: '__AZURE_CLIENT_ID__',
  AZURE_CLIENT_SECRET: '__AZURE_CLIENT_SECRET__',
  AZURE_TOKEN_URL: '__AZURE_TOKEN_URL__',
  AZURE_AUTH_URL: '__AZURE_AUTH_URL__',
  
  // ========== CONFIGURACIÓN SUPABASE (PÚBLICA) ==========
  // Estos valores son públicos y pueden estar en el código
  SUPABASE_URL: 'https://yeiupcumvdvdswfhcoty.supabase.co',
  SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllaXVwY3VtdmR2ZHN3Zmhjb3R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMjY2NjgsImV4cCI6MjA4NzcwMjY2OH0.2M5OXYOm03yIJTypGn-C1dQVBl-QnZX1IkBz_pNAmxk',
  
  // ========== CONFIGURACIÓN DEL BUZÓN ==========
  MAILBOX_EMAIL: 'pqrs.institucional@tododrogas.com.co',
  
  // ========== CONFIGURACIÓN GENERAL ==========
  APP_NAME: 'PQR System',
  APP_VERSION: '1.0.0',
  SYNC_INTERVAL: 300000  // 5 minutos en milisegundos
};

// Verificación de que la configuración se cargó
console.log('📋 Plantilla de configuración cargada. Los secretos serán inyectados en el despliegue.');
