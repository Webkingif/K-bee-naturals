import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, CheckCircle2, User, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, SALON_INFO } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || SERVICES_DATA[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [hairLength, setHairLength] = useState<string>('Mid-Back');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const selectedService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '12:00 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl shadow-2xl border-2 border-[#1F4D2B]/20 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Modal Top Header with Brand Orange Accent */}
        <div className="bg-[#1F4D2B] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-[#F05A24] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#80ED99] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lekki Phase 1 Studio</span>
          </div>

          <h3 id="booking-modal-title" className="font-display font-black text-2xl sm:text-3xl text-white">
            Reserve Your Crown Session
          </h3>
          <p className="text-xs sm:text-sm text-stone-200 mt-1">
            Tension-free care • Botanical steam • Expert stylists in Lagos
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            /* Confirmation Success State */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#1F4D2B] text-white flex items-center justify-center mx-auto mb-4 ring-8 ring-[#1F4D2B]/15">
                <CheckCircle2 className="w-10 h-10 text-[#80ED99]" />
              </div>

              <h4 className="font-display font-black text-2xl text-[#161815] mb-2">
                Your Appointment is Reserved!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                Thank you, <strong className="text-[#161815]">{fullName || 'Queen'}</strong>. We have noted your appointment for{' '}
                <strong className="text-[#F05A24]">{selectedService.title}</strong> on{' '}
                <strong className="text-[#161815]">{selectedDate}</strong> at{' '}
                <strong className="text-[#161815]">{selectedTime}</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#1F4D2B]/15 text-left mb-6 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-bold text-[#161815]">{selectedService.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Estimate:</span>
                  <span className="font-bold text-[#F05A24]">{selectedService.priceNgn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Location:</span>
                  <span className="font-bold text-[#1F4D2B]">14B Admiralty Way, Lekki Phase 1</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/2348123456789?text=${encodeURIComponent(
                    `Hello KBee Naturals! I just booked an appointment for ${selectedService.title} on ${selectedDate} at ${selectedTime}. My name is ${fullName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-sm shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="flex-1 py-3.5 rounded-full bg-[#161815] hover:bg-[#1F4D2B] text-white font-bold text-sm transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 1. Select Service */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#1F4D2B] mb-2">
                  1. Select Your Service Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES_DATA.map((srv) => {
                    const isSelected = selectedServiceId === srv.id;
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => setSelectedServiceId(srv.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-2 border-[#F05A24] shadow-sm ring-1 ring-[#F05A24]'
                            : 'bg-white/60 border-stone-200 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-display font-black text-sm text-[#161815]">
                            {srv.title}
                          </span>
                          <span className="text-xs font-extrabold text-[#F05A24]">
                            {srv.priceNgn}
                          </span>
                        </div>
                        <div className="text-[11px] text-stone-500 flex items-center gap-2">
                          <Clock className="w-3 h-3 text-[#1F4D2B]" />
                          <span>{srv.duration}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#1F4D2B] mb-2">
                    2. Choose Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-stone-300 text-sm font-semibold text-[#161815] focus:outline-none focus:ring-2 focus:ring-[#F05A24]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#1F4D2B] mb-2">
                    Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-stone-300 text-sm font-semibold text-[#161815] focus:outline-none focus:ring-2 focus:ring-[#F05A24]"
                  >
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Client Contact Details */}
              <div className="space-y-4 pt-2 border-t border-stone-200">
                <label className="block text-xs font-black uppercase tracking-wider text-[#1F4D2B]">
                  3. Your Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-semibold text-stone-600 mb-1 block">Full Name</span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amina Adeleke"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F05A24]"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-stone-600 mb-1 block">WhatsApp / Phone</span>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +234 812 345 6789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F05A24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-semibold text-stone-600 mb-1 block">Hair Texture / Length</span>
                    <select
                      value={hairLength}
                      onChange={(e) => setHairLength(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F05A24]"
                    >
                      <option value="Short / TWA">Short / TWA (Teeny Weeny Afro)</option>
                      <option value="Shoulder Length">Shoulder Length</option>
                      <option value="Armpit Length">Armpit Length</option>
                      <option value="Mid-Back">Mid-Back</option>
                      <option value="Waist Length or Longer">Waist Length or Longer</option>
                    </select>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-stone-600 mb-1 block">Special Notes or Questions</span>
                    <input
                      type="text"
                      placeholder="e.g. Sensitive scalp, edge care"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F05A24]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-booking-btn"
                  className="w-full py-4 rounded-full bg-[#F05A24] hover:bg-[#D94612] text-white font-black text-base tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Appointment Reservation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-[11px] text-stone-500 mt-2">
                  No advance payment needed to book. Pay securely at the Lekki studio.
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
