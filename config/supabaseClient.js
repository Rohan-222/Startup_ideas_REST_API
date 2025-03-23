const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

// Test Supabase Connection
async function testConnection() {
    try {
        const { data, error } = await supabase.from('ideas').select('*').limit(1);

        if (error) {
            console.error('❌ Supabase Connection Error:', error.message);
        } else {
            console.log('✅ Supabase is connected!');
            console.log('Fetched Data:', data);
        }
    } catch (err) {
        console.error('❌ Unexpected Error:', err.message);
    }
}

// Run connection test when this file is loaded
testConnection();

module.exports = supabase;
