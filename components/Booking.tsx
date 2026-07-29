import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    UserCircle,
    Users,
    Grid3x3,
    Sparkles,
    ArrowRight,
    Leaf,
    Flower2,
    Calendar,
    Clock,
    Sun,
    Moon,
    Heart,
    Shield,
    Award,
    CheckCircle,
    ChevronDown,
    Mail,
    Phone,
    User,
    IdCard,
    AlertCircle,
    X,
    Hourglass,
    Package,
    Tag,
    Info,
} from 'lucide-react';

// Types
interface BookingFilters {
    gender: string;
    guests: number;
    roomType: string;
    treatment: string;
    treatmentDuration: string;
    packageType?: string;
    date?: string;
    time?: string;
    name: string;
    email: string;
    phone: string;
    aadharNumber: string;
}

interface BookingFormProps {
    onSearch?: (filters: BookingFilters) => void;
    className?: string;
    variant?: 'default' | 'compact' | 'full';
    showDatePicker?: boolean;
    theme?: 'light' | 'dark';
    initialData?: Partial<BookingFilters>;
    onClose?: () => void;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    aadharNumber?: string;
}

// Predefined Treatment Packages
interface TreatmentPackage {
    id: string;
    name: string;
    treatment: string;
    duration: string;
    days: number;
    description: string;
    icon: any;
    price?: string;
    includes?: string[];
}

const treatmentPackages: TreatmentPackage[] = [
    {
        id: 'pizhichil-3days',
        name: 'No Man Pizhichil',
        treatment: 'pizhichil',
        duration: '3-days',
        days: 3,
        description: 'Traditional Kerala oil bath therapy with warm medicated oil',
        icon: Heart,
        price: '₹12,000',
        includes: ['Daily Pizhichil Session', 'Medicated Oil', 'Steam Bath', 'Herbal Tea']
    },
    {
        id: 'pizhichil-5days',
        name: 'Pizhichil Therapy',
        treatment: 'pizhichil',
        duration: '5-days',
        days: 5,
        description: 'Extended Pizhichil therapy for deep rejuvenation',
        icon: Heart,
        price: '₹18,500',
        includes: ['Daily Pizhichil Session', 'Medicated Oil', 'Steam Bath', 'Herbal Tea', 'Dietary Consultation']
    },
    {
        id: 'pizhichil-7days',
        name: 'Pizhichil Rejuvenation',
        treatment: 'pizhichil',
        duration: '7-days',
        days: 7,
        description: 'Complete Pizhichil therapy for full body rejuvenation',
        icon: Heart,
        price: '₹25,000',
        includes: ['Daily Pizhichil Session', 'Medicated Oil', 'Steam Bath', 'Herbal Tea', 'Dietary Consultation', 'Yoga Session']
    },
    {
        id: 'panchakarma-5days',
        name: 'Panchakarma Detox',
        treatment: 'panchakarma',
        duration: '5-days',
        days: 5,
        description: 'Introductory Panchakarma detoxification program',
        icon: Sun,
        price: '₹22,000',
        includes: ['Vamana', 'Virechana', 'Basti', 'Nasya', 'Raktamokshana']
    },
    {
        id: 'panchakarma-7days',
        name: 'Panchakarma Purification',
        treatment: 'panchakarma',
        duration: '7-days',
        days: 7,
        description: 'Complete Panchakarma purification therapy',
        icon: Sun,
        price: '₹30,000',
        includes: ['Vamana', 'Virechana', 'Basti', 'Nasya', 'Raktamokshana', 'Dietary Plan']
    },
    {
        id: 'panchakarma-10days',
        name: 'Panchakarma Rejuvenation',
        treatment: 'panchakarma',
        duration: '10-days',
        days: 10,
        description: 'Deep Panchakarma therapy with personalized care',
        icon: Sun,
        price: '₹42,000',
        includes: ['Vamana', 'Virechana', 'Basti', 'Nasya', 'Raktamokshana', 'Dietary Plan', 'Yoga', 'Meditation']
    },
    {
        id: 'panchakarma-14days',
        name: 'Panchakarma Intensive',
        treatment: 'panchakarma',
        duration: '14-days',
        days: 14,
        description: 'Complete Panchakarma therapy with holistic lifestyle program',
        icon: Sun,
        price: '₹55,000',
        includes: ['Vamana', 'Virechana', 'Basti', 'Nasya', 'Raktamokshana', 'Dietary Plan', 'Yoga', 'Meditation', 'Lifestyle Counseling']
    },
    {
        id: 'abhyanga-3days',
        name: 'Abhyanga Wellness',
        treatment: 'abhyanga',
        duration: '3-days',
        days: 3,
        description: 'Traditional Ayurvedic oil massage for wellness',
        icon: Leaf,
        price: '₹9,000',
        includes: ['Daily Abhyanga Massage', 'Medicated Oil', 'Steam Bath']
    },
    {
        id: 'abhyanga-5days',
        name: 'Abhyanga Rejuvenation',
        treatment: 'abhyanga',
        duration: '5-days',
        days: 5,
        description: 'Extended Abhyanga therapy for deep relaxation',
        icon: Leaf,
        price: '₹14,500',
        includes: ['Daily Abhyanga Massage', 'Medicated Oil', 'Steam Bath', 'Herbal Tea']
    },
    {
        id: 'abhyanga-7days',
        name: 'Abhyanga Therapy',
        treatment: 'abhyanga',
        duration: '7-days',
        days: 7,
        description: 'Complete Abhyanga therapy with personalized oils',
        icon: Leaf,
        price: '₹19,800',
        includes: ['Daily Abhyanga Massage', 'Medicated Oil', 'Steam Bath', 'Herbal Tea', 'Dietary Consultation']
    },
    {
        id: 'shirodhara-3days',
        name: 'Shirodhara Relaxation',
        treatment: 'shirodhara',
        duration: '3-days',
        days: 3,
        description: 'Therapeutic oil pouring on forehead for mental peace',
        icon: Flower2,
        price: '₹10,500',
        includes: ['Daily Shirodhara Session', 'Medicated Oil', 'Head Massage']
    },
    {
        id: 'shirodhara-5days',
        name: 'Shirodhara Therapy',
        treatment: 'shirodhara',
        duration: '5-days',
        days: 5,
        description: 'Extended Shirodhara for stress and anxiety relief',
        icon: Flower2,
        price: '₹16,000',
        includes: ['Daily Shirodhara Session', 'Medicated Oil', 'Head Massage', 'Herbal Tea']
    },
    {
        id: 'shirodhara-7days',
        name: 'Shirodhara Wellness',
        treatment: 'shirodhara',
        duration: '7-days',
        days: 7,
        description: 'Complete Shirodhara therapy for mental wellness',
        icon: Flower2,
        price: '₹22,000',
        includes: ['Daily Shirodhara Session', 'Medicated Oil', 'Head Massage', 'Herbal Tea', 'Meditation']
    },
    {
        id: 'marma-2days',
        name: 'Marma Therapy',
        treatment: 'marma',
        duration: '2-days',
        days: 2,
        description: 'Traditional Marma point therapy for energy balance',
        icon: Moon,
        price: '₹6,500',
        includes: ['Marma Point Massage', 'Herbal Oil', 'Steam Bath']
    },
    {
        id: 'marma-3days',
        name: 'Marma Healing',
        treatment: 'marma',
        duration: '3-days',
        days: 3,
        description: 'Extended Marma therapy for deep healing',
        icon: Moon,
        price: '₹9,500',
        includes: ['Marma Point Massage', 'Herbal Oil', 'Steam Bath', 'Herbal Tea']
    },
    {
        id: 'marma-5days',
        name: 'Marma Intensive',
        treatment: 'marma',
        duration: '5-days',
        days: 5,
        description: 'Complete Marma therapy for holistic healing',
        icon: Moon,
        price: '₹15,000',
        includes: ['Marma Point Massage', 'Herbal Oil', 'Steam Bath', 'Herbal Tea', 'Dietary Consultation']
    },
];

// Filter packages by treatment and duration
const getFilteredPackages = (treatment: string, duration: string) => {
    return treatmentPackages.filter(
        pkg => pkg.treatment === treatment && pkg.duration === duration
    );
};

// Options
const genderOptions = [
    { value: 'all', label: 'All Guests', icon: UserCircle },
    { value: 'male', label: 'Male', icon: Sun },
    { value: 'female', label: 'Female', icon: Moon },
    { value: 'couple', label: 'Couple', icon: Heart },
];

const roomOptions = [
    { value: 'all', label: 'All Rooms', icon: Grid3x3 },
    { value: 'standard', label: 'Standard Room', icon: Leaf },
    { value: 'deluxe', label: 'Deluxe Room', icon: Flower2 },
    { value: 'suite', label: 'Suite', icon: Sun },
    { value: 'villa', label: 'Villa', icon: Moon },
];

const treatmentOptions = [
    { value: 'all', label: 'All Treatments', icon: Sparkles },
    { value: 'abhyanga', label: 'Abhyanga Massage', icon: Leaf },
    { value: 'shirodhara', label: 'Shirodhara', icon: Flower2 },
    { value: 'panchakarma', label: 'Panchakarma', icon: Sun },
    { value: 'marma', label: 'Marma Therapy', icon: Moon },
    { value: 'pizhichil', label: 'Pizhichil', icon: Heart },
];

// Treatment duration mapping based on treatment type
const getDurationOptions = (treatment: string) => {
    const durationMap: Record<string, { value: string; label: string; icon: any }[]> = {
        'all': [
            { value: '2-days', label: '2 Days', icon: Clock },
            { value: '3-days', label: '3 Days', icon: Clock },
            { value: '4-days', label: '4 Days', icon: Clock },
            { value: '5-days', label: '5 Days', icon: Clock },
            { value: '7-days', label: '7 Days', icon: Clock },
            { value: '10-days', label: '10 Days', icon: Clock },
            { value: '14-days', label: '14 Days', icon: Clock },
        ],
        'abhyanga': [
            { value: '3-days', label: '3 Days', icon: Clock },
            { value: '5-days', label: '5 Days', icon: Clock },
            { value: '7-days', label: '7 Days', icon: Clock },
        ],
        'shirodhara': [
            { value: '3-days', label: '3 Days', icon: Clock },
            { value: '5-days', label: '5 Days', icon: Clock },
            { value: '7-days', label: '7 Days', icon: Clock },
        ],
        'panchakarma': [
            { value: '5-days', label: '5 Days', icon: Clock },
            { value: '7-days', label: '7 Days', icon: Clock },
            { value: '10-days', label: '10 Days', icon: Clock },
            { value: '14-days', label: '14 Days', icon: Clock },
        ],
        'marma': [
            { value: '2-days', label: '2 Days', icon: Clock },
            { value: '3-days', label: '3 Days', icon: Clock },
            { value: '4-days', label: '4 Days', icon: Clock },
            { value: '5-days', label: '5 Days', icon: Clock },
        ],
        'pizhichil': [
            { value: '3-days', label: '3 Days', icon: Clock },
            { value: '5-days', label: '5 Days', icon: Clock },
            { value: '7-days', label: '7 Days', icon: Clock },
            { value: '10-days', label: '10 Days', icon: Clock },
        ],
    };
    return durationMap[treatment] || durationMap['all'];
};

// Get package display name
const getPackageDisplayName = (treatment: string, duration: string) => {
    const packageMap: Record<string, Record<string, string>> = {
        'pizhichil': {
            '3-days': 'No Man Pizhichil',
            '5-days': 'Pizhichil Therapy',
            '7-days': 'Pizhichil Rejuvenation',
            '10-days': 'Pizhichil Intensive'
        },
        'panchakarma': {
            '5-days': 'Panchakarma Detox',
            '7-days': 'Panchakarma Purification',
            '10-days': 'Panchakarma Rejuvenation',
            '14-days': 'Panchakarma Intensive'
        },
        'abhyanga': {
            '3-days': 'Abhyanga Wellness',
            '5-days': 'Abhyanga Rejuvenation',
            '7-days': 'Abhyanga Therapy'
        },
        'shirodhara': {
            '3-days': 'Shirodhara Relaxation',
            '5-days': 'Shirodhara Therapy',
            '7-days': 'Shirodhara Wellness'
        },
        'marma': {
            '2-days': 'Marma Therapy',
            '3-days': 'Marma Healing',
            '4-days': 'Marma Intensive',
            '5-days': 'Marma Complete'
        }
    };
    return packageMap[treatment]?.[duration] || `${treatment} - ${duration}`;
};

const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
];

// Input Field Component
const InputField = ({
    label,
    icon: Icon,
    value,
    onChange,
    error,
    type = 'text',
    placeholder,
    required = false,
    maxLength,
    dark = false,
    disabled = false,
}: any) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="relative">
            <label className={`flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase mb-2 ${dark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                <Icon className="w-3.5 h-3.5 text-forest" />
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    disabled={disabled}
                    className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-all duration-300 ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${error
                        ? 'border-red-400 hover:border-red-500 focus:border-red-500 bg-red-50/50'
                        : focused
                            ? 'border-forest shadow-md'
                            : dark
                                ? 'bg-gray-800 border-gray-700 text-white hover:border-forest/50 focus:border-forest'
                                : 'bg-white/80 backdrop-blur-sm border-gray-100 hover:border-forest/30 focus:border-forest text-gray-800'
                        }`}
                />
                {error && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                        <AlertCircle className="w-4 h-4 text-red-500" />
                    </motion.div>
                )}
            </div>
            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 mt-1 flex items-center gap-1"
                >
                    <AlertCircle className="w-3 h-3" />
                    {error}
                </motion.p>
            )}
        </div>
    );
};

// Select Component
const SelectWithIcon = ({
    value,
    onChange,
    options,
    label,
    icon: Icon,
    dark = false,
    required = false,
    disabled = false,
}: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find((opt: any) => opt.value === value);

    return (
        <div className="relative">
            <label className={`flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase mb-2 ${dark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                <Icon className="w-3.5 h-3.5 text-forest" />
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-all duration-300 cursor-pointer hover:shadow-md flex items-center justify-between ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${isOpen
                        ? 'border-forest shadow-md'
                        : dark
                            ? 'bg-gray-800 border-gray-700 text-white hover:border-forest/50'
                            : 'bg-white/80 backdrop-blur-sm border-gray-100 hover:border-forest/30 text-gray-800'
                        }`}
                >
                    <span className="flex items-center gap-2">
                        {selectedOption && <selectedOption.icon className="w-4 h-4 text-forest" />}
                        <span className={dark ? 'text-white' : 'text-gray-800'}>
                            {selectedOption?.label || 'Select'}
                        </span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${dark ? 'text-gray-400' : 'text-gray-400'
                        }`} />
                </button>

                <AnimatePresence>
                    {isOpen && !disabled && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute z-50 w-full mt-1 border-2 rounded-xl shadow-lg overflow-hidden max-h-60 overflow-y-auto ${dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                                }`}
                        >
                            {options.map((option: any) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => {
                                        onChange(option.value);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full px-4 py-2.5 text-sm text-left transition-colors flex items-center gap-2 ${dark
                                        ? 'hover:bg-gray-700 text-white'
                                        : 'hover:bg-forest/5 text-gray-800'
                                        } ${value === option.value
                                            ? dark
                                                ? 'bg-gray-700 text-forest-light'
                                                : 'bg-forest/10 text-forest-dark font-medium'
                                            : ''
                                        }`}
                                >
                                    <option.icon className="w-4 h-4" />
                                    {option.label}
                                    {value === option.value && (
                                        <CheckCircle className={`w-4 h-4 ml-auto ${dark ? 'text-forest-light' : 'text-forest'
                                            }`} />
                                    )}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

// Main Component
export const AyurvedicBookingForm: React.FC<BookingFormProps> = ({
    onSearch,
    className = '',
    variant = 'default',
    showDatePicker = true,
    theme = 'light',
    initialData = {},
    onClose,
}) => {
    // Personal Information
    const [name, setName] = useState(initialData.name || '');
    const [email, setEmail] = useState(initialData.email || '');
    const [phone, setPhone] = useState(initialData.phone || '');
    const [aadharNumber, setAadharNumber] = useState(initialData.aadharNumber || '');

    // Booking Details
    const [gender, setGender] = useState(initialData.gender || 'all');
    const [guests, setGuests] = useState(initialData.guests || 1);
    const [roomType, setRoomType] = useState(initialData.roomType || 'all');
    const [treatment, setTreatment] = useState(initialData.treatment || 'all');
    const [treatmentDuration, setTreatmentDuration] = useState(initialData.treatmentDuration || '3-days');
    const [selectedDate, setSelectedDate] = useState(initialData.date || '');
    const [selectedTime, setSelectedTime] = useState(initialData.time || '');
    const [selectedPackage, setSelectedPackage] = useState<string>('');

    // Validation States
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const isDark = theme === 'dark';
    const isCompact = variant === 'compact';

    // Get duration options based on selected treatment
    const durationOptions = getDurationOptions(treatment);

    // Get filtered packages
    const filteredPackages = treatment !== 'all' && treatmentDuration !== 'all'
        ? getFilteredPackages(treatment, treatmentDuration)
        : [];

    // Reset duration when treatment changes to first available option
    useEffect(() => {
        const availableDurations = getDurationOptions(treatment);
        if (availableDurations.length > 0) {
            const currentDurationExists = availableDurations.some(
                (d: any) => d.value === treatmentDuration
            );
            if (!currentDurationExists) {
                setTreatmentDuration(availableDurations[0].value);
                setSelectedPackage('');
            }
        }
    }, [treatment]);

    // Reset selected package when treatment or duration changes
    useEffect(() => {
        setSelectedPackage('');
    }, [treatment, treatmentDuration]);

    // 🟢 FIX: Auto-select package when only one is available
    useEffect(() => {
        if (filteredPackages.length === 1) {
            setSelectedPackage(filteredPackages[0].id);
        } else if (filteredPackages.length === 0) {
            setSelectedPackage('');
        }
    }, [filteredPackages]);

    // Validation Functions
    const validateName = (value: string) => {
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s\-']+$/.test(value)) return 'Name should contain only letters';
        return '';
    };

    const validateEmail = (value: string) => {
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address (e.g., name@domain.com)';
        return '';
    };

    const validatePhone = (value: string) => {
        if (!value.trim()) return 'Phone number is required';
        const cleaned = value.replace(/\s/g, '');
        if (!/^\d{10}$/.test(cleaned)) return 'Enter a valid 10-digit phone number';
        if (!/^[6789]/.test(cleaned)) return 'Phone number must start with 6, 7, 8, or 9';
        return '';
    };

    const validateAadhar = (value: string) => {
        if (!value.trim()) return 'Aadhar number is required';
        const cleaned = value.replace(/\s/g, '');
        if (!/^\d{12}$/.test(cleaned)) return 'Enter a valid 12-digit Aadhar number';
        return '';
    };

    const validateField = (field: keyof FormErrors, value: string) => {
        switch (field) {
            case 'name': return validateName(value);
            case 'email': return validateEmail(value);
            case 'phone': return validatePhone(value);
            case 'aadharNumber': return validateAadhar(value);
            default: return '';
        }
    };

    const handleFieldChange = (field: keyof FormErrors, value: string) => {
        const error = validateField(field, value);
        setErrors(prev => ({ ...prev, [field]: error }));
        setTouched(prev => ({ ...prev, [field]: true }));

        switch (field) {
            case 'name': setName(value); break;
            case 'email': setEmail(value); break;
            case 'phone': setPhone(value); break;
            case 'aadharNumber': setAadharNumber(value); break;
        }
    };

    const handleBlur = (field: keyof FormErrors) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        let value = '';
        switch (field) {
            case 'name': value = name; break;
            case 'email': value = email; break;
            case 'phone': value = phone; break;
            case 'aadharNumber': value = aadharNumber; break;
        }
        const error = validateField(field, value);
        setErrors(prev => ({ ...prev, [field]: error }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {
            name: validateName(name),
            email: validateEmail(email),
            phone: validatePhone(phone),
            aadharNumber: validateAadhar(aadharNumber),
        };

        setErrors(newErrors);
        setTouched({
            name: true,
            email: true,
            phone: true,
            aadharNumber: true,
        });

        return !Object.values(newErrors).some(error => error !== '');
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        // Find the selected package
        const selectedPkg = treatmentPackages.find(p => p.id === selectedPackage);

        const filters: BookingFilters = {
            gender,
            guests,
            roomType,
            treatment,
            treatmentDuration,
            packageType: selectedPkg?.name || getPackageDisplayName(treatment, treatmentDuration),
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            aadharNumber: aadharNumber.replace(/\s/g, ''),
            ...(showDatePicker && { date: selectedDate, time: selectedTime }),
        };

        setSubmitSuccess(true);
        onSearch?.(filters);
        setIsSubmitting(false);

        setTimeout(() => setSubmitSuccess(false), 5000);
    };

    // Format Aadhar number with spaces
    const formatAadhar = (value: string) => {
        const cleaned = value.replace(/\s/g, '');
        if (!/^\d*$/.test(cleaned)) return value;
        const match = cleaned.match(/^(\d{0,4})(\d{0,4})(\d{0,4})$/);
        if (match) {
            return [match[1], match[2], match[3]].filter(Boolean).join(' ');
        }
        return cleaned;
    };

    const handleAadharChange = (value: string) => {
        const cleaned = value.replace(/\s/g, '');
        if (cleaned.length <= 12) {
            const formatted = formatAadhar(cleaned);
            setAadharNumber(formatted);
            const error = validateAadhar(formatted);
            setErrors(prev => ({ ...prev, aadharNumber: error }));
        }
    };

    const handlePhoneChange = (value: string) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length <= 10) {
            setPhone(cleaned);
            const error = validatePhone(cleaned);
            setErrors(prev => ({ ...prev, phone: error }));
        }
    };

    const handleNameChange = (value: string) => {
        const cleaned = value.replace(/[^a-zA-Z\s\-']/g, '');
        setName(cleaned);
        const error = validateName(cleaned);
        setErrors(prev => ({ ...prev, name: error }));
    };

    // Get treatment label for display
    const getTreatmentLabel = (value: string) => {
        const treatment = treatmentOptions.find(t => t.value === value);
        return treatment ? treatment.label : 'Select Treatment';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden ${isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700'
                : 'bg-white/95 backdrop-blur-xl border border-forest/10'
                } ${className}`}
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute top-0 right-0 w-64 h-64 opacity-5" viewBox="0 0 200 200">
                    <path
                        d="M 100 0 C 150 50 200 100 150 150 C 100 200 50 150 0 100 C 0 50 50 0 100 0 Z"
                        fill={isDark ? '#4ade80' : '#2d5a27'}
                        className="blur-3xl"
                    />
                </svg>
                <svg className="absolute bottom-0 left-0 w-80 h-80 opacity-5" viewBox="0 0 200 200">
                    <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill={isDark ? '#fbbf24' : '#d4a545'}
                        className="blur-3xl"
                    />
                </svg>
            </div>

            {/* Form Content */}
            <div className="relative">
                {/* Header */}
                <div className={`relative px-6 pt-6 pb-4 text-center border-b ${isDark
                    ? 'border-gray-700'
                    : 'border-forest/10'
                    }`}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest via-amber to-saffron" />

                    <h3 className={`text-2xl font-serif font-bold ${isDark ? 'text-white' : 'text-forest-dark'
                        }`}>
                        Complete Your Booking
                    </h3>
                    <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Please fill in all details to confirm your reservation
                    </p>
                </div>

                <div className={`p-6 ${isCompact ? 'space-y-3' : 'space-y-4'}`}>
                    {/* Personal Information */}
                    <div className={`${!isCompact ? 'bg-gradient-to-r from-forest/5 to-saffron/5 rounded-2xl p-4' : ''}`}>
                        <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                            <User className="w-3.5 h-3.5 text-forest" />
                            Personal Information
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <InputField
                                label="Full Name"
                                icon={User}
                                value={name}
                                onChange={handleNameChange}
                                onBlur={() => handleBlur('name')}
                                error={touched.name ? errors.name : ''}
                                placeholder="Enter your full name"
                                required
                                dark={isDark}
                            />
                            <InputField
                                label="Email Address"
                                icon={Mail}
                                type="email"
                                value={email}
                                onChange={(v: string) => handleFieldChange('email', v)}
                                onBlur={() => handleBlur('email')}
                                error={touched.email ? errors.email : ''}
                                placeholder="name@domain.com"
                                required
                                dark={isDark}
                            />
                            <InputField
                                label="Phone Number"
                                icon={Phone}
                                value={phone}
                                onChange={handlePhoneChange}
                                onBlur={() => handleBlur('phone')}
                                error={touched.phone ? errors.phone : ''}
                                placeholder="9876543210"
                                required
                                dark={isDark}
                            />
                            <InputField
                                label="Aadhar Number"
                                icon={IdCard}
                                value={aadharNumber}
                                onChange={handleAadharChange}
                                onBlur={() => handleBlur('aadharNumber')}
                                error={touched.aadharNumber ? errors.aadharNumber : ''}
                                placeholder="1234 5678 9012"
                                required
                                maxLength={14}
                                dark={isDark}
                            />
                        </div>
                    </div>

                    {/* Booking Details */}
                    <div>
                        <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                            <Calendar className="w-3.5 h-3.5 text-forest" />
                            Booking Details
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <SelectWithIcon
                                value={gender}
                                onChange={setGender}
                                options={genderOptions}
                                label="Gender"
                                icon={UserCircle}
                                dark={isDark}
                            />
                            <div className="relative">
                                <label className={`flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                    <Users className="w-3.5 h-3.5 text-forest" />
                                    Guests
                                </label>
                                <div className="relative">
                                    <select
                                        value={guests}
                                        onChange={(e) => setGuests(Number(e.target.value))}
                                        className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-all duration-300 appearance-none cursor-pointer hover:shadow-md ${isDark
                                            ? 'bg-gray-800 border-gray-700 text-white hover:border-forest/50 focus:border-forest'
                                            : 'bg-white/80 backdrop-blur-sm border-gray-100 hover:border-forest/30 focus:border-forest text-gray-800'
                                            }`}
                                    >
                                        {[1, 2, 3, 4, 5, 6].map((n) => (
                                            <option key={n} value={n}>
                                                {n} Guest{n > 1 ? "s" : ""}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${isDark ? 'text-gray-400' : 'text-gray-400'
                                        }`} />
                                </div>
                            </div>
                            <SelectWithIcon
                                value={roomType}
                                onChange={setRoomType}
                                options={roomOptions}
                                label="Room Type"
                                icon={Grid3x3}
                                dark={isDark}
                            />
                        </div>
                    </div>

                    {/* Treatments & Duration */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <SelectWithIcon
                                value={treatment}
                                onChange={(value: string) => {
                                    setTreatment(value);
                                    const durations = getDurationOptions(value);
                                    if (durations.length > 0) {
                                        setTreatmentDuration(durations[0].value);
                                    }
                                }}
                                options={treatmentOptions}
                                label="Treatment"
                                icon={Sparkles}
                                dark={isDark}
                            />
                            <SelectWithIcon
                                value={treatmentDuration}
                                onChange={(value: string) => {
                                    setTreatmentDuration(value);
                                    setSelectedPackage('');
                                }}
                                options={durationOptions}
                                label="Duration"
                                icon={Hourglass}
                                dark={isDark}
                                disabled={durationOptions.length === 0}
                            />
                        </div>
                    </div>

                    {/* 🟢 Package Selection - Shows when treatment is selected */}
                    {treatment !== 'all' && filteredPackages.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`rounded-2xl p-4 ${isDark
                                ? 'bg-gray-800/50 border border-gray-700'
                                : 'bg-gradient-to-r from-amber/10 to-forest/10 border border-amber/20'
                                }`}
                        >
                            <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                <Package className="w-3.5 h-3.5 text-amber" />
                                Select Your Package
                                {filteredPackages.length === 1 && (
                                    <span className="ml-auto text-[10px] text-forest font-normal">
                                        (Auto-selected)
                                    </span>
                                )}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {filteredPackages.map((pkg) => (
                                    <motion.button
                                        key={pkg.id}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setSelectedPackage(pkg.id)}
                                        className={`relative p-4 rounded-xl border-2 text-left transition-all duration-300 ${selectedPackage === pkg.id
                                            ? 'border-forest bg-forest/5 shadow-md'
                                            : isDark
                                                ? 'border-gray-700 hover:border-gray-600 bg-gray-800/50'
                                                : 'border-gray-200 hover:border-forest/30 bg-white/50'
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`p-2 rounded-lg ${selectedPackage === pkg.id
                                                ? 'bg-forest text-white'
                                                : isDark
                                                    ? 'bg-gray-700 text-gray-400'
                                                    : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                <pkg.icon className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-2">
                                                    <h5 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-800'
                                                        }`}>
                                                        {pkg.name}
                                                    </h5>
                                                    {pkg.price && (
                                                        <span className="text-xs font-bold text-forest">
                                                            {pkg.price}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-xs mt-0.5 text-gray-500">
                                                    {pkg.days} days • {pkg.description}
                                                </p>
                                                {selectedPackage === pkg.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        className="mt-2 pt-2 border-t border-forest/20"
                                                    >
                                                        <div className="flex flex-wrap gap-1">
                                                            {pkg.includes?.map((item, idx) => (
                                                                <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-forest/10 text-forest-dark">
                                                                    {item}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                            {selectedPackage === pkg.id && (
                                                <CheckCircle className="w-4 h-4 text-forest flex-shrink-0" />
                                            )}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                            {/* 🟢 Auto-select indicator when only one package */}
                            {filteredPackages.length === 1 && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-xs text-center mt-3 text-forest-dark/70"
                                >
                                    ✓ Only one package available for this selection - automatically selected
                                </motion.p>
                            )}
                        </motion.div>
                    )}

                    {/* Date & Time */}
                    {showDatePicker && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="relative">
                                <label className={`flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                    <Calendar className="w-3.5 h-3.5 text-forest" />
                                    Date
                                </label>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-all duration-300 cursor-pointer hover:shadow-md ${isDark
                                        ? 'bg-gray-800 border-gray-700 text-white hover:border-forest/50 focus:border-forest'
                                        : 'bg-white/80 backdrop-blur-sm border-gray-100 hover:border-forest/30 focus:border-forest text-gray-800'
                                        }`}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                            <div className="relative">
                                <label className={`flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                    <Clock className="w-3.5 h-3.5 text-amber" />
                                    Time
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className={`w-full border-2 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-all duration-300 appearance-none cursor-pointer hover:shadow-md ${isDark
                                            ? 'bg-gray-800 border-gray-700 text-white hover:border-forest/50 focus:border-forest'
                                            : 'bg-white/80 backdrop-blur-sm border-gray-100 hover:border-forest/30 focus:border-forest text-gray-800'
                                            }`}
                                    >
                                        <option value="">Select Time</option>
                                        {timeSlots.map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${isDark ? 'text-gray-400' : 'text-gray-400'
                                        }`} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={isCompact ? 'mt-2' : 'mt-4'}
                    >
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="relative group w-full bg-gradient-to-r from-forest-dark via-forest to-forest-light hover:from-forest hover:via-forest-dark hover:to-forest text-white px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                            <div className="relative flex items-center justify-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Leaf className="w-4 h-4" />
                                        </motion.div>
                                        <span>Processing...</span>
                                    </>
                                ) : submitSuccess ? (
                                    <>
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Booking Submitted!</span>
                                    </>
                                ) : (
                                    <>
                                        <Leaf className="w-4 h-4" />
                                        <span>Confirm Booking</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </div>
                        </button>
                    </motion.div>

                    {/* Success Message */}
                    <AnimatePresence>
                        {submitSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center justify-center gap-2 text-sm text-green-600 bg-green-50 rounded-xl px-4 py-3 border border-green-200"
                            >
                                <CheckCircle className="w-4 h-4" />
                                <span>Your booking has been confirmed successfully!</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Selected Package Summary */}
                    {selectedPackage && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`rounded-xl p-3 text-sm ${isDark
                                ? 'bg-forest/10 border border-forest/20 text-gray-300'
                                : 'bg-forest/5 border border-forest/20 text-gray-700'
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <Info className="w-4 h-4 text-forest" />
                                <span>
                                    Selected Package:{' '}
                                    <strong className={isDark ? 'text-white' : 'text-forest-dark'}>
                                        {treatmentPackages.find(p => p.id === selectedPackage)?.name || 'Custom'}
                                    </strong>
                                    {filteredPackages.length === 1 && (
                                        <span className="ml-2 text-xs text-forest/70">(Auto-selected)</span>
                                    )}
                                </span>
                            </div>
                        </motion.div>
                    )}

                    {/* Trust Badges */}
                    <div className={`flex items-center justify-center gap-6 pt-2 text-xs border-t ${isDark ? 'border-gray-700 text-gray-400' : 'border-gray-100 text-gray-500'
                        }`}>
                        <span className="flex items-center gap-1.5">
                            <Shield className="w-3.5 h-3.5 text-forest" />
                            Verified Centers
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-saffron" />
                            Certified Therapists
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Heart className="w-3.5 h-3.5 text-amber" />
                            Natural Ingredients
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AyurvedicBookingForm;